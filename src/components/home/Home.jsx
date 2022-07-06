import React, { useEffect } from 'react';
import ProductsList from '../products/ProductsList';
//Redux
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/slices/products.slice';
import SearchByName from './SearchByName';
import Filters from './Filters';
import SideBar from '../shared/Sidebar';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="row">
      <div className="col-md-3 my-2 my-md-3">
        <Filters />
      </div>
      <div className="col-md-9 my-2 my-md-3">
        <SearchByName />
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
