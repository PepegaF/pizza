import './App.css';
import './scss/app.scss'
import './scss/components/_all.scss'
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Cart from './pages/Cart';


function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <Header />
            <div className="content">
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/*' element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
