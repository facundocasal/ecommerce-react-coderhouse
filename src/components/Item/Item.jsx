import { Link } from "react-router-dom";
import "./item.css"

export default function Item({ mark, id, model, img, price }) {

  return (
    <div className="item">
      <div className="item-info">
          <h2 className="item-title">{mark}</h2>
          <h3 className="item-title">{model}</h3>
        <div>
          <img className="imgItem" src={img} alt="logo" />
        </div>
        <div className="price" >
          <h4><span>Precio:</span> ${price}</h4>
        </div>
        <Link className="buttonBuy" to={`/productos/item/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};