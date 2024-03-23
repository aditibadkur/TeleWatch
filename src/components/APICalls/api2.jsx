import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent1() {
  const [churn,setChurn]=useState('');
  useEffect(() => {
    const fetchData = async () => {
      let data = '';
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://1857-2401-4900-57d1-31e5-11f2-d93f-7593-2a8c.ngrok-free.app/get_values/',
        headers: {},
        data: data
      };

      try {
        const response = await axios.request(config);
        console.log(response.data.churn_count); 
        setChurn(response.data.churn_count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{churn}</h1>
    </div>
  );
}

export default MyComponent1;
