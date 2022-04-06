import './App.css';
import Tittle from './components/Tittle/Tittle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <div>
        {/* <Tittle texto={"catalogo"}/>
        <ItemListContainer /> */}
        <ItemDetailContainer/>
      </div>

    </>
  );
}

export default App;
