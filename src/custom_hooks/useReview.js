import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../components/Loading/Loading";
import  useItems from './useItems'

const useReview = () => {
    const {isLoadingItem, data:items} = useItems();
    const { isLoading, error, data, isFetching } = useQuery(["items-review",items], () =>
    axios.get(
      // "http://localhost:3000/data/product.json"
     "http://localhost:5000/review"

    ).then((res) => res.data));


    if(isLoading){
    
        return <Loading></Loading>

    }

  
// const [data, setData] = useState([]);
// useEffect(() => {
//   axios
//     .get("data/product.json")
//     .then((res) => res.data)
//     .then((data) => setData(data));
// }, []);

// console.log("data from user query", data);

return { isLoading, error, data, isFetching };
};

export default useReview;