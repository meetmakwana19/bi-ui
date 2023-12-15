import React, { useState } from 'react'
import { InfiniteScrollTable, Truncate } from "@contentstack/venus-components"

interface ItemStatusMap {
  [key: number]: string;
}
interface DataObject {
  [key: number]: string;
}

interface ColumnDataObject {
  [key: string]: string;
}

interface SelectedAssets {
  [key: string]: boolean;
}


const TableEntries: React.FC = () => {

  const [data, setData] = useState<DataObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCounts, setTotalCounts] = useState(null);
  const [itemStatusMap, setItemStatusMap] = useState<ItemStatusMap>({});
  const [selectedAssets, updateSelectedAssets] = useState<SelectedAssets>({});
  const [resetRowSelection, updateResetRowSelection] = useState<boolean>(false);
  const [viewBy, updateViewBy] = useState('Comfort')


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
  const fetchData = async ({ limit, startIndex }: { limit: number, startIndex: number }) => {
    try {
      const itemStatusMapTemp: ItemStatusMap = {};
      for (let index = 0; index <= 30; index++) {
        itemStatusMapTemp[index] = 'loading';
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
        itemStatusMapTemp[index] = 'loaded';
      });

      setItemStatusMap({ ...itemStatusMapTemp });
      setLoading(false);
      setData(responseData);
      setTotalCounts(responseData.length);
    }

    catch (error) {
      console.error('fetchData -> error', error);
      setLoading(false);
    }
  }

  // loadMoreItems can get same props as fetchTableData
  const loadMoreItems = async ({ limit, startIndex, stopIndex }: { limit: number, startIndex: number, stopIndex: number }) => {
    // the props are already coming from InfiniteScrollTable.
    try {
      const itemStatusMapCopy: ItemStatusMap = { ...itemStatusMap };

      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMapCopy[index] = 'loading';
      }

      setItemStatusMap(itemStatusMapCopy);
      setLoading(true);

      // this request fetches the next set of items which are not yet visible on the table but will be visible once scrolled down.
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();

      // Updating item statuses and simulating loaded states
      const updatedItemStatusMapCopy: ItemStatusMap = { ...itemStatusMap }

      responseData.forEach((_item: string, index: number) => {
        updatedItemStatusMapCopy[startIndex + index] = 'loaded';
      });

      setItemStatusMap(updatedItemStatusMapCopy);
      setLoading(false);
      setData((data) => [...data, ...responseData]);
      setTotalCounts((prevTotalCounts) => prevTotalCounts + responseData.length);

    }
    catch (error) {
      console.error('fetchData -> error', error);
      setLoading(false);
    }
  }

  const getSelectedRow = (singleSelectedRowIds: any) => {
    const selectedObj: Record<string, boolean> = {};
    singleSelectedRowIds.forEach((assetUid: any) => {
      selectedObj[assetUid] = true;
    });

    updateSelectedAssets({ ...selectedObj });
  };

  const getViewByValue = (selectedViewBy: any) => {
    updateViewBy(selectedViewBy)
  }

  const onRowSelectProp = [
    {
      label: 'Log selected Items',
      cb: (data: any) => {
        console.log('selected data', data);
        updateResetRowSelection(true);
      },
    },
  ];

  return (
    <div className="table-entries">
      <InfiniteScrollTable
        columns={columns}
        data={data}
        uniqueKey={'id'}
        fetchTableData={fetchData}
        loading={loading}
        totalCounts={100} //must set this first for the table to initialize with so that scrolling can work properly.
        itemStatusMap={itemStatusMap}
        minBatchSizeToFetch={30} //Min batch size or data size(limit) to fetch on scroll. So this value goes to the limit prop of loadMoreItems
        loadMoreItems={loadMoreItems}
        searchPlaceholder="Search by Name"
        canSearch={true}
        canRefresh={true}
        // tableHeight={150}
        // viewSelector={true} // Settings icon
        // initialSortBy={[]} // No initial sorting for simplicity

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