import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { fetchDataFailure, fetchDataSuccess } from '../actions/fetchData';
import { useEffect } from 'react';


export const FetchData = (props) => {
    
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
                dispatch(fetchDataSuccess(data));
                
            } catch (error) {
                dispatch(fetchDataFailure(error))
            }
        }
        fetchData()

    }, [dispatch])
 
    return (
        <>
            {data && data?.map(data => {
                return <p key={data.id}>{JSON.stringify(data)}</p>
            })}
        </>
        
      );
}


