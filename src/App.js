import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Homepage from './Routes/Homepage';
import Navigation from './Routes/Navigation';
import Shop from './Routes/Shop';
import Footer from './Routes/Footer';
import Checkout from './Routes/Checkout';
import Confirmation from './Routes/Confirmation';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigation/>} >
          <Route index element={<Homepage/>}/>
          <Route path='/shop/*' element={<Shop/>}/>
          <Route path='/checkout'element={<Checkout />}/>
        </Route>
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
