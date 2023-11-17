import React, { useState } from 'react'
import { InfiniteScrollTable } from "@contentstack/venus-components"

interface ItemStatusMap {
    [key: number]: string;
}
interface DataObject {
    [key: number]: string;
}

interface ColumnDataObject {
    [key: string]: string;
}

const UserToneTable: React.FC = () => {

    const [data, setData] = useState<DataObject[]>([]);
    const [loading, setLoading] = useState(false);
    const [totalCounts, setTotalCounts] = useState(null);
    const [itemStatusMap, setItemStatusMap] = useState<ItemStatusMap>({});


    const columns = [
        {
            Header: 'Name',
            id: 'name',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.title}</div>
                )
            },
        },
        {
            Header: 'Created By',
            id: 'created_by',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.userId}</div>
                )
            },
        },
        {
            Header: 'Created At',
            id: 'created_at',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.id}</div>
                )
            },
        },
        {
            Header: 'Tags',
            id: 'tags',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.completed}</div>
                )
            },
        },
    ];

    // console.log(typeof columns);  //Just debugging stuff

    // Just FYI :- fetchTableData passes these default args to fetchData here ---> { skip: 0, limit: 30, startIndex: 0, stopIndex: 29 }
    const fetchData = async ({ limit, startIndex}: { limit: number, startIndex: number}) => {  //{sortBy, searchText, skip, limit, startIndex, stopIndex} use this to customize the api call eg. const response: any = await fakeServer({ skip: 0, limit: 30, sortBy })
        try {

            const itemStatusMapTemp: ItemStatusMap = {};
            for (let index = 0; index <= 30; index++) {
                itemStatusMapTemp[index] = 'loading';
            }

            setItemStatusMap(itemStatusMapTemp);
            setLoading(true);

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
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
    // the props are already coming from InfiniteScrollTable.
    const loadMoreItems = async ({ limit, startIndex, stopIndex }: { limit: number, startIndex: number, stopIndex: number }) => {
        console.log("Getting limit : ", limit, " and startIndex : ", startIndex);

        try {
            const itemStatusMapTempCopy: ItemStatusMap = { ...itemStatusMap };

            for (let index = startIndex; index <= stopIndex; index++) {
                itemStatusMapTempCopy[index] = 'loading';
            }

            setItemStatusMap(itemStatusMapTempCopy);
            setLoading(true);

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
            const responseData = await response.json();

            const updatedItemStatusMapTempCopy: ItemStatusMap = { ...itemStatusMap }

            responseData.forEach((_item: string, index: number) => {
                updatedItemStatusMapTempCopy[startIndex + index] = 'loaded';
            });

            setItemStatusMap({ ...updatedItemStatusMapTempCopy });
            setLoading(false);
            setData((data) => [...data, ...responseData]);
            setTotalCounts((prevTotalCounts) => prevTotalCounts + responseData.length);

        }
        catch (error) {
            console.error('fetchData -> error', error);
            setLoading(false);
        }
    }

    const tableProps = {
        columns: columns,
        data: data,
        uniqueKey: 'id',
        fetchTableData: fetchData,
        loading: loading,
        totalCounts: totalCounts,
        itemStatusMap: itemStatusMap,
        minBatchSizeToFetch: 30,
        loadMoreItems: loadMoreItems,
        searchPlaceholder: "Search by Name, Description or Tags",
        canSearch: true,
        canRefresh: true,

    };

    return (
        <div>
            <InfiniteScrollTable {...tableProps} />
        </div>
    )
}

export default UserToneTable