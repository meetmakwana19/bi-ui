import { InfiniteScrollTable, Truncate } from "@contentstack/venus-components"
import { useState } from "react"

interface ItemStatusMap {
  [key: number]: string;
}

function TableEntries() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [itemStatusMap, setItemStatusMap] = useState({});
  let [selectedAssets, updateSelectedAssets] = useState({});
  let [resetRowSelection, updateResetRowSelection] = useState(false);

  const columns = [
    {
      Header: 'Name',
      id: 'name',
      accessor: (data: any) => {
        // console.log("getting data : ", data)
        return (
          // <p>{data.name}</p>
          <Truncate isResponsive={true} truncateFrom="end">{data.name}</Truncate>
        )
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Created By',
      id: 'created_by',
      accessor: (data: any) => {
        return (
          // <div> {data.email}</div >
          <Truncate isResponsive={true} truncateFrom="end">{data.email}</Truncate>
        )
      },
      default: true,
      addToColumnSelector: true,
    },
    {
      Header: 'Created At',
      id: 'created_at',
      accessor: (data: any) => (
        <div>{data.id}</div>
      ),
      default: true,
      addToColumnSelector: true,
    },
  ];

  // Just FYI :- fetchTableData passes these default args to fetchData here ---> { skip: 0, limit: 30, startIndex: 0, stopIndex: 29 }
  const fetchData = async ({ limit, startIndex }: { limit: any, startIndex: any }) => {
    try {


      const itemStatusMapTemp: ItemStatusMap = {};
      for (let i = 0; i <= 30; i++) {
        itemStatusMapTemp[i] = "loading";
      }
      setItemStatusMap(itemStatusMapTemp);
      setLoading(true);

      // let 30 be default
      // limit = 5;

      // _page is for pagination with each page having 10 entries.
      // _limit is to limit the response array out of total 500.
      // so fetching comments?_page=1&_limit=30 means it'll fetch 10 items on first load coz 10 items are there on page 1.
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${startIndex / limit + 1}&_limit=${limit}`);

      const responseData = await response.json();

      responseData.forEach((_item: string, index: number) => {
        itemStatusMapTemp[index] = "loaded";
      })
      setItemStatusMap({ ...itemStatusMap });

      setLoading(false);

      // setData([...data, ...responseData]);
      setData(responseData);
      
    } catch (error) {
      console.error('fetchData -> Error : ', error);
    }
  };

  // loadMoreItems can get same props as fetchTableData
  const loadMoreItems = async ({ limit, startIndex, stopIndex }: { limit: number, startIndex: number, stopIndex: number }) => {
    // the props are already coming from InfiniteScrollTable.
    try {
      setLoading(true);

      console.log("Scroll Getting limit : ", limit, " and startIndex : ", startIndex);

      // this request fetches the next set of items which are not yet visible on the table but will be visible once scrolled down.
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();

      // Updating item statuses and simulating loaded states
      console.log("Map is ", itemStatusMap);

      const updatedItemStatusMap: Record<number, string> = { ...itemStatusMap };
      for (let index = startIndex; index <= stopIndex; index++) {
        updatedItemStatusMap[index] = 'loaded';
      }

      setItemStatusMap(updatedItemStatusMap);

      setLoading(false);
      setData([...data, ...responseData]);
    } catch (error) {
      console.error('loadMoreItems -> error', error);
    }
  };

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: (data: any) => {
        console.log('selected data', data);
        updateResetRowSelection(true);
      },
    },
  ];

  const getSelectedRow = (singleSelectedRowIds: any) => {
    let selectedObj: Record<string, boolean> = {};
    singleSelectedRowIds.forEach((assetUid: any) => {
      selectedObj[assetUid] = true;
    });

    updateSelectedAssets({ ...selectedObj });
  };

  return (
    <div className="table-entries">
      <InfiniteScrollTable
        columns={columns}
        data={data}
        uniqueKey={'id'}
        fetchTableData={fetchData}
        loading={loading}
        totalCounts={100} //must set this first for the table to initialize with so that scrolling can work properly.
        loadMoreItems={loadMoreItems}
        itemStatusMap={itemStatusMap}
        // minBatchSizeToFetch={30} //Min batch size or data size(limit) to fetch on scroll. So this value goes to the limit prop of loadMoreItems
        initialSortBy={[]} // No initial sorting for simplicity
        viewSelector={true} // Settings icon
        searchPlaceholder="Search by Name, Description or Tags"
        canSearch={true}
        canRefresh={true}
        // tableHeight={150}

        isRowSelect={true} // Pass true to add checkboxes in each row.
        // following are optional checkbox props
        fullRowSelect={true}
        bulkActionList={onRowSelectProp}
        initialSelectedRowIds={selectedAssets}
        getSelectedRow={getSelectedRow}
      />
    </div>
  )
}

export default TableEntries;