import './App.css';
import Tittle from './components/Tittle/Tittle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Tittle texto={"catalogo"}/>
        <ItemListContainer />
      </div>

    </>
  );
}

export default App;
