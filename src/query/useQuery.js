import { useEffect, useState } from "react";

function useQuery(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => () => {
      res.json()
      console.log(res.json())
    })
    .then(data => setData(data.results))
  }, [])

  return { data };
}

export default useQuery;