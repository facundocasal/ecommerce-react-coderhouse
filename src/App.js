import './App.css';
import NavBar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />
                <Route exact path='/category/:mark' element={<ItemListContainer/>}/>
                <Route exact path='/productos/item/:id' element={<ItemDetailContainer/>}/>
                <Route exact path='/Cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
