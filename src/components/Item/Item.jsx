import { Link } from "react-router-dom";
import "./item.css"

export default function Item ( prod )  {


        
    return (
      <div className="item">
        <div className="item-info">
          <h2 className="item-title">{prod.name}</h2>
          <h3 className="item-title">{prod.model}</h3>
          <div>
            <img className="imgItem" src={prod.img} alt="logo" />
          </div>
          <h4>Precio: {prod.price}</h4>
          <Link className="buttonBuy" to={`/productos/item/${prod.id}`}>Comprar</Link>
        </div>
      </div>

    );
};