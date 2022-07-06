import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {getProductsByName} from '../../store/slices/products.slice'
const SearchByName = () => {

  const {register,handleSubmit,reset} = useForm();
  const dispatch = useDispatch();

  const getProducts=(data)=>{
    console.log(data);
    dispatch(getProductsByName(data.name))
    reset({name:''})
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit(getProducts)}>
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register('name',{required:true})}
          />
          <button className="btn btn-secondary">Serch</button>
        </div>
      </form>
    </div>
  );
};

export default SearchByName;
