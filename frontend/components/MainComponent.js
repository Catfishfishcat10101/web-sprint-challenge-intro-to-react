import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleComponent from './SingleComponent';

const MainComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await axios.get('https://api.example1.com/data');
      const response2 = await axios.get('https://api.example2.com/data');
      const combinedData = [...response1.data, ...response2.data];
      setData(combinedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <SingleComponent key={index} data={item} />
      ))}
    </div>
  );
};

export default MainComponent;