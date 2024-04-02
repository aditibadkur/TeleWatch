import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [feature, setFeature] = useState('');
  const [id, setID] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let data = '';
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://1857-2401-4900-57d1-31e5-11f2-d93f-7593-2a8c.ngrok-free.app/get_alerts/',
        headers: {},
        data: data
      };

      try {
        const response = await axios.request(config);
        console.log(response.data.feature);
        setFeature(response.data.feature); 
        console.log(response.data.customer_id);
        setID(response.data.customer_id);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 2 minutes
    const interval = setInterval(fetchData, 10 * 1000);

  
  }, []);

  return (
    <div>
      <h1>{id}</h1>
      <h1>{feature}</h1>
    </div>
  );
}

export default MyComponent;
