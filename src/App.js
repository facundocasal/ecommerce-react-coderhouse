import './App.css';
import Title from './componets/Tittle/Tittle';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Title/>
        <ItemListContainer />
      </div>

    </>
  );
}

export default App;
