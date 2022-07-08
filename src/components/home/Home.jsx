import ProductsList from '../products/ProductsList';
import SearchByName from './SearchByName';
import Filters from './Filters';

const Home = () => {
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
