import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

function DataListReactQuery() { 
  const { isLoading, error, data, isFetching } = useQuery('fetchData', () =>
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.data)
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>	
      <div>userId: {data.userId}</div>
	    <div>title: {data.title}</div>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default DataListReactQuery;