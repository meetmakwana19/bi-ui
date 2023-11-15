import { InfiniteScrollTable, Table } from "@contentstack/venus-components"
import { useState } from "react"

function TableEntries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalCounts, setTotalCounts] = useState(null);

  const columns = [
    {
      Header: 'Name',
      id: 'name',
      accessor: (data: any) => (
        <div>{data.title}</div>
      ),
    },
    {
      Header: 'Created By',
      id: 'created_by',
      accessor: (data: any) => (
        <div>{data.completed}</div>
      ),
    },
    {
      Header: 'Created At',
      id: 'created_at',
      accessor: (data: any) => (
        <div>{data.userId}</div>
      ),
    },
  ];

  const fetchData = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try {
      setLoading(true);

      console.log("=========", startIndex, " and ", limit);
      
      // Using JSONPlaceholder as an example API
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
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

      // Using JSONPlaceholder as an example API
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();

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
        itemStatusMap={{}}
        minBatchSizeToFetch={10}
        initialSortBy={[]} // No initial sorting for simplicity
        viewSelector={false} // Hide the view selector for simplicity
        columnSelector={false} // Hide the column selector for simplicity
        searchPlaceholder="Search" // Provide a placeholder for the search input
        canSearch={true} // Enable search functionality
        canRefresh={true} // Enable refresh functionality
      />
    </>
  )
}

export default TableEntries