import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import 'sweetalert2/dist/sweetalert2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart';
import ContexCartProvider from './components/ContexCart';
import FormCheckOut from './components/FormCheckOut/FormCheckOut';


function App() {
  return (
    <>
      <BrowserRouter>
        <ContexCartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path='/category/:mark' element={<ItemListContainer />} />
            <Route exact path='/productos/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route exact path='/FormCheckOut' element={<FormCheckOut/>}/>
          </Routes>
          <Footer/>
        </ContexCartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
