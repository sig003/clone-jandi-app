//https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6
//https://blog.devgenius.io/how-the-pros-fetch-data-react-mastery-63b14e6795df

import React from 'react';
import { useFetchData } from '/src/hooks/useFetchData';

function DataList() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const { apiData, error, loading } = useFetchData(url);

  if (error) {
    return null;
  }

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <>
      <div>
        userId: {apiData[0]}
      </div>
      <div>
        title: {apiData[1]}
      </div>
    </>
  );
}

export default DataList;