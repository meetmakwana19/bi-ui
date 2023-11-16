import { InfiniteScrollTable, Table } from "@contentstack/venus-components"
import { useState } from "react"

function TableEntries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCounts, setTotalCounts] = useState(null);
  const [itemStatusMap, setItemStatusMap] = useState({});

  const columns = [
    {
      Header: 'Name',
      id: 'name',
      accessor: (data: any) => {
        // console.log("getting data : ", data)
        return (
          <p>{data.name}</p>
        )
      },
    },
    {
      Header: 'Created By',
      id: 'created_by',
      accessor: (data: any) => {
        return (
          <div> {data.email}</div >
        )
      },
    },
    {
      Header: 'Created At',
      id: 'created_at',
      accessor: (data: any) => (
        <div>{data.id}</div>
      ),
    },
  ];

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      setLoading(true);

      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();

      console.log("respnse : ", responseData);

      setLoading(false);
      setData([...data, ...responseData]);
      setTotalCounts(responseData.length);
    } catch (error) {
      console.error('fetchData -> error', error);
    }
  };

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      setLoading(true);

      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();

      // Updating item statuses and simulating loaded states
      const updatedItemStatusMap = { ...itemStatusMap };
      for (let index = startIndex; index <= stopIndex; index++) {
        updatedItemStatusMap[index] = 'loaded';
      }

      setItemStatusMap(updatedItemStatusMap);

      setLoading(false);
      setData([...data, ...responseData]);
      setTotalCounts(responseData.length);
    } catch (error) {
      console.error('loadMoreItems -> error', error);
    }
  };
  return (
    <>
      <InfiniteScrollTable
        columns={columns}
        data={data}
        uniqueKey={'id'}
        fetchTableData={fetchData}
        loading={loading}
        totalCounts={totalCounts}
        loadMoreItems={loadMoreItems}
        itemStatusMap={itemStatusMap}
        minBatchSizeToFetch={10}
        initialSortBy={[]} // No initial sorting for simplicity
        viewSelector={true} // Settings icon
        searchPlaceholder="Search by name, description or tags" 
        canSearch={true} 
        canRefresh={true}
      />
    </>
  )
}

export default TableEntries