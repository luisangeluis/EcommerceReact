import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProductsByCategory } from '../../store/slices/products.slice';

const SearchByCategory = () => {
  const [categories, setCategories] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    axios
      .get(
        'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
      )
      .then((res) => {
        // console.log(res.data.data.categories);
        setCategories(res.data.data.categories);
      })
      .catch((error) => console.log(error));
  };

  const setCategory = (id) => {
    dispatch(getProductsByCategory(id));
  };

  return (
    <div className="card card-category">
      <div className="card-body d-flex flex-column bg-light">
        {categories &&
          categories.map((category) => (
            <button
              onClick={() => setCategory(category.id)}
              key={category.id}
              className="btn py-1 py-md-2"
            >
              {category.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SearchByCategory;
