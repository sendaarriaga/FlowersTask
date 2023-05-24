import React, {useState} from "react";
import '../pages/styleseason.css'
import { Information } from "./Information";

function Flowers2 (){
    const [flower2, setFlowers] = useState(Information);
    let array=[];
    for (let i=0; i<flower2.length; i++){
        if(flower2[i].estacion == estacion){
            array.push({name: flower2[i].name, description: flower2[i].description, image: flower2[i].image,});
        }
    }
    return (
        <><div class="flower">
            <ol type="I">
                {array.map((flower) => 
                    ( <li className="flower-item"> 
                        <h3>{flower.name} </h3>
                        <p>{flower.description} </p>
                        <img src={flower.image}/>
                    </li>))}
            </ol>
        </div></>
    )
}

export default Flowers2;