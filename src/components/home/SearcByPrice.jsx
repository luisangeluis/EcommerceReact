import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getProductsByPrice } from '../../store/slices/products.slice';

const SearchByPrice = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const setPrice = (data) => {
    console.log(data);
    dispatch(getProductsByPrice(data.from, data.to));
  };

  return (
    <div className="card">
      <div className="card-body">
        <form action="" onSubmit={handleSubmit(setPrice)}>
          <div className="mb-3">
            <label htmlFor="from" className="form-label">
              From
            </label>
            <input
              type="number"
              className="form-control"
              id="from"
              {...register('from', { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to" className="form-label">
              To
            </label>
            <input
              type="number"
              className="form-control"
              id="to"
              {...register('to', { required: true })}
            />
          </div>
          <button className="btn btn-dark">Filter price</button>
        </form>
      </div>
    </div>
  );
};
export default SearchByPrice;
