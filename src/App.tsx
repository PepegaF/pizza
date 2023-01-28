import './scss/app.scss'
import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound/NotFound';
import Pizza from './pages/Pizza/Pizza';
import Cart from './pages/Cart';


function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <Header />
            <div className="content">
               <Routes>
                  <Route path='/*' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/home/:pizza' element={<Pizza />} />
                  {/* <Route path='/home/:' element={<Home />} /> */}
                  <Route path='/cart' element={<Cart />} />
                  {/* <Route path='/*' element={<NotFound />} /> */}
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;