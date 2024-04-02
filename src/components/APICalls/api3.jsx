import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent2() {
  const [revenue,setRevenue]=useState('');
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
        console.log(response.data.total_charges); 
        setRevenue(response.data.total_charges);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{revenue}</h1>
    </div>
  );
}

export default MyComponent2;
