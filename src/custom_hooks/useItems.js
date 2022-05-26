import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useItems = () => {
      const { isLoading, error, data, isFetching } = useQuery("items", () =>
      axios.get(
        "http://localhost:3000/data/product.json"
      ).then((res) => res.data)

  
    );

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

export default useItems;
