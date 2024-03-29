import React, {useState} from "react";
import { Information } from "./Information";
import './styleseasons.css'


function Flowers (){
    const [flowers, setFlowers] = useState(Information);
    return (
        <ol type="I" >
                {flowers.map((flower) => 
                    ( <li className="flower-item"> 
                        <h3>{flower.name} </h3>
                        <p>{flower.description} </p>
                        <img src={flower.image}/>
                    </li>))}
        </ol>
    )
}

export default Flowers;