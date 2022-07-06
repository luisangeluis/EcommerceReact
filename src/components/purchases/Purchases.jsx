import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getConfigPurchases from '../../utils/getConfigPurchases';
import Purchase from './Purchase';

const Purchases = () => {
  const [purchases, setPurchases] = useState();

  useEffect(() => {
    getPurchases();
  }, []);
  const getPurchases = () => {
    axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`,
        getConfigPurchases()
      )
      .then((res) => {
        console.log(res.data.data.purchases);
        setPurchases(res.data.data.purchases);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        {purchases &&
          purchases.map((purchase) => (
            <Purchase purchase={purchase} key={purchase.id} />
          ))}
      </div>
    </div>
  );
};

export default Purchases;
