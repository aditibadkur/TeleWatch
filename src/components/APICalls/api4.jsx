import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TablesProjectRow from "components/Tables/TablesProjectRow";


function MyComponent3() {
  const [revenue,setRevenue]=useState('');
  const [dep,setDep]=useState('');
  const [ph,setPh]=useState('');
  const [is,setIs]=useState('');
  const [pb,setPb]=useState('');
  useEffect(() => {
    const fetchData = async () => {
      let data = '';
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://1857-2401-4900-57d1-31e5-11f2-d93f-7593-2a8c.ngrok-free.app/get_anomalies1/',
        headers: {},
        data: data
      };

      try {
        const response = await axios.request(config);
        console.log(response.data); 
        setRevenue(response.data.cust_id);
        setDep(response.data.depedents);
        setPh(response.data.phone_service);
        setIs(response.data.internet_service);
        setPb(response.data.paperless_billing);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <TablesProjectRow
        name={revenue} // Replace row.name with revenue
        logo={dep} // Replace row.logo with dep
        status={ph} // Replace row.status with ph
        budget={is} // Replace row.budget with is
        progression={pb} // Replace row.progression with pb
      />
  );
}

export default MyComponent3;
