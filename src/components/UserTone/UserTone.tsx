import React, {useState} from 'react'
import './UserTone.css'
import { Button, Help, InfiniteScrollTable } from '@contentstack/venus-components'

interface BrandToneProps { }
interface ItemStatusMap {
  [key: number]: string;
}

const BrandTone: React.FC<BrandToneProps> = () => {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCounts, setTotalCounts] = useState(null);
  const [itemStatusMap, setItemStatusMap] = useState<ItemStatusMap>({});


  const columns = [
    {
      Header: 'Name',
      id: 'name',
      accessor: (data: any) => {
        return(
          <div>{data.title}</div>
        )
      },
    },
    {
      Header: 'Created By',
      id: 'created_by',
      accessor: (data: any) => {
        return(
          <div>{data.userId}</div>
        )
      },
    },
    {
      Header: 'Created At',
      id: 'created_at',
      accessor: (data: any) => {
        return(
          <div>{data.id}</div>
        )
      },
    },
  ];

  console.log(typeof columns);

  const fetchData= async ({sortBy, searchText, skip, limit, startIndex, stopIndex}) => {  //{sortBy, searchText, skip, limit, startIndex, stopIndex} use this to customize the api call eg. const response: any = await fakeServer({ skip: 0, limit: 30, sortBy })
    try{

      const itemStatusMapTemp: ItemStatusMap = {};
      for (let index = 0; index <= 30; index ++){
        itemStatusMapTemp[index] = 'loading';
      }

      setItemStatusMap(itemStatusMapTemp);
      setLoading(true);

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();
      responseData.forEach((_item: any, index: number) => {
        itemStatusMapTemp[index] = 'loaded';
      });

      setItemStatusMap({...itemStatusMapTemp});
      setLoading(false);
      setData(responseData);
      setTotalCounts(responseData.length);
    }
    
    catch(error) {
      console.error('fetchData -> error', error);
      setLoading(false);
    }
  }

  const loadMoreItems = async ({ sortBy, searchText, skip, limit, startIndex, stopIndex }) => {
    try{
      const itemStatusMapTempCopy: ItemStatusMap = { ...itemStatusMap};

      for (let index = startIndex; index <= stopIndex; index++ ) {
        itemStatusMapTempCopy[index] = 'loading';
      }

      setItemStatusMap(itemStatusMapTempCopy);
      setLoading(true);

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${startIndex / limit + 1}&_limit=${limit}`);
      const responseData = await response.json();

      const updatedItemStatusMapTempCopy: ItemStatusMap = {...itemStatusMap}

      responseData.forEach((_item: any, index: number) => {
        updatedItemStatusMapTempCopy[startIndex + index] = 'loaded';
      });

      setItemStatusMap({...updatedItemStatusMapTempCopy});
      setLoading(false);
      setData([...data, ...responseData]);
      setTotalCounts(prevTotalCounts => prevTotalCounts + responseData.length);

    } 
    catch(error) {
      console.error('fetchData -> error', error);
      setLoading(false);
    }
  }

  const tableProps = {
    columns: columns,
    data: data,
    uniqueKey:'id',
    fetchTableData: fetchData,
    loading: loading,
    totalCounts: totalCounts,
    itemStatusMap: itemStatusMap,
    minBatchSizeToFetch:'10',
    loadMoreItems: loadMoreItems,
  };

return (
  <div className="brand-tone-style">
    <div className='heading-button'>

      <h2>User Tone <Help text="User Tone empowers Contentstack to align content with your brand's voice and personality." type="primary" alignment="right" />
      </h2>

      <Button icon="AddPlus" buttonType="primary" size='regular' >Add Tone</Button>

    </div>

    <InfiniteScrollTable {...tableProps} />
  </div>
);
}

export default BrandTone;