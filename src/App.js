import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Homepage from './Routes/Homepage';
import Navigation from './Routes/Navigation';
import Shop from './Routes/Shop';
import Footer from './Routes/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigation/>} >
          <Route index element={<Homepage/>}/>
          <Route path='/shop/*' element={<Shop/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
