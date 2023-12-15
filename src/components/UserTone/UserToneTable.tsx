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

interface SelectedAssets {
    [key: string]: boolean;
  }
  

const UserToneTable: React.FC = () => {

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
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.title}</div>
                )
            },
            default: true,
            addToColumnSelector: true,
        },
        {
            Header: 'Created By',
            id: 'created_by',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.userId}</div>
                )
            },
            default: true,
            addToColumnSelector: true,
        },
        {
            Header: 'Created At',
            id: 'created_at',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.id}</div>
                )
            },
            default: true,
            addToColumnSelector: true,
        },
        {
            Header: 'Tags',
            id: 'tags',
            accessor: (data: ColumnDataObject) => {
                return (
                    <div>{data.completed}</div>
                )
            },
            default: true,
            addToColumnSelector: true,
        },
    ];

    // Just FYI :- fetchTableData passes these default args to fetchData here ---> { skip: 0, limit: 30, startIndex: 0, stopIndex: 29 }
    const fetchData = async ({ limit, startIndex }: { limit: number, startIndex: number }) => {  //{sortBy, searchText, skip, limit, startIndex, stopIndex} use this to customize the api call eg. const response: any = await fakeServer({ skip: 0, limit: 30, sortBy })
        try {

            const itemStatusMapTemp: ItemStatusMap = {};
            for (let index = 0; index <= 29; index++) {
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
            setTotalCounts(60);
        }

        catch (error) {
            console.error('fetchData -> error', error);
            setLoading(false);
        }
    }

    // loadMoreItems can get same props as fetchTableData
    // the props are already coming from InfiniteScrollTable.
    const loadMoreItems = async ({ limit, startIndex, stopIndex }: { limit: number, startIndex: number, stopIndex: number }) => {

        try {
            setLoading(true);

            const itemStatusMapCopy: ItemStatusMap = { ...itemStatusMap };

            for (let index = startIndex; index <= stopIndex; index++) {
                itemStatusMapCopy[index] = 'loading';
            }
            setItemStatusMap(itemStatusMapCopy);

            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
            console.log(':::Server Response:', response);
            console.log(':::Limit:', limit);
            console.log(':::Start Index:', startIndex);

            const responseData = await response.json();

            const updatedItemStatusMapCopy: ItemStatusMap = { ...itemStatusMap };
            responseData.forEach((_item: string, index: number) => {
                updatedItemStatusMapCopy[startIndex + index] = 'loaded';
            });
            setItemStatusMap(updatedItemStatusMapCopy);

            setLoading(false);
            setData((prevData) => [...prevData, ...responseData]);
            setTotalCounts((prevTotalCounts) => prevTotalCounts + responseData.length);

        }
        catch (error) {
            console.error('loadMoreItems -> error', error);
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

    const tableProps = {
        columns: columns,
        data: data,
        uniqueKey: 'id',
        fetchTableData: fetchData,
        loading: loading,
        totalCounts: totalCounts,
        itemStatusMap: itemStatusMap,
        minBatchSizeToFetch: 5,
        loadMoreItems: loadMoreItems,
        searchPlaceholder: "Search by Name, Description or Tags",
        canSearch: true,
        canRefresh: true,

        isRowSelect: true, // Pass true to add checkboxes in each row.
        // following are optional checkbox props
        fullRowSelect: true,
        // bulkActionList: onRowSelectProp,
        initialSelectedRowIds: selectedAssets,
        getSelectedRow: getSelectedRow,
        getViewByValue: getViewByValue,


    };

    return (
        <div className="table-entries">
            <InfiniteScrollTable {...tableProps} />
        </div>
    )
}

export default UserToneTable