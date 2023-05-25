import React, {useState} from "react";
import './styleseasons.css';
import { Information } from "./Information";

function Flowers2 ({estacion}){
    const [flower2, setFlowers] = useState(Information);
    let i;
    let array=[];

    for (i=0; i<flower2.length; i++){
        if(flower2[i].estacion == estacion){
            array.push({name: flower2[i].name, description: flower2[i].description, image: flower2[i].image,});
        }
    }
    return (
        <ol type="I"  >
                {array.map((flower) => 
                    ( <li className="flower-item"> 
                        <h3>{flower.name} </h3>
                        <p>{flower.description} </p>
                        <img src={flower.image}/>
                    </li>))}
        </ol>
    )
    
}

export default Flowers2;