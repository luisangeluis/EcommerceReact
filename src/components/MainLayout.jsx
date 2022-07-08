import { Outlet } from 'react-router-dom';
import Footer from './shared/Footer';
import Header from './shared/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="container py-3 py-md-4 flex-grow-1 d-flex flex-column">
          <Outlet />
        </div>
      </main>
      {/* <footer>soy footer</footer> */}
      <Footer />
    </>
  );
};

export default MainLayout;
