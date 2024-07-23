import './App.css';
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetails';
import {
  Routes,
  Route,
} from "react-router-dom";
import Filter from './components/Filter';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:rName' element={<RestaurantDetail />}/>
      <Route path='/filter' element={<Filter />}/>
    </Routes>
  );
}

export default App;
