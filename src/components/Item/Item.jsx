import { Link } from "react-router-dom";
import "./item.css"

export default function Item (  {mark , id ,key , model , img , price}  )  {

  console.log(key , id )
        
    return (
      <div className="item">
         <div className="item-info">
          <h2 className="item-title">{mark}</h2>
          <h3 className="item-title">{model}</h3>
          <div>
            <img className="imgItem" src={img} alt="logo" />
          </div>
          <h4>Precio: {price}</h4>
          <Link className="buttonBuy" to={`/productos/item/${id}`}>Comprar</Link>
        </div> 
      </div>

    );
};