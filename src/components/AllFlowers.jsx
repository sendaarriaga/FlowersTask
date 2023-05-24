import React, {useState} from "react";
const Information = [
        {name: "ALEGRIA", estacion: "verano", description: "Es una planta herbácea perenne, suculenta que puede alcanzar una altura de entre 15 y 60 cm. Los tallos son poco ramificados, glabros y algunas veces rojizos, enraizando en las nudos inferiores", image: "flores/alegria.jpg"},
        {name: "ALHELI O ALELI", estacion: "primavera", description: "Es una planta que no sobrepasa el metro de altura, tiene flores pequeñas de cuatro pétalos terminales, que pueden ser simples o dobles, y además son oblongas, finas y alargadas, posee un perfume suave y colores variados.", image: "flores/aleli.jpg"},
        {name: "AMAPOLA", estacion: "primavera", description: "Se trata de una planta con unas flores muy características de color rojo intenso y un interior blanco. Sin embargo, por debajo de la planta las flores de amapola cuentan con una zona de color oscuro.", image: "flores/amapola.jpg"},
        {name: "ASTER", estacion: "otono", description: "Es una planta perenne con unas flores muy parecidas a las margaritas pero con pétalos más delgados y alargados y de variados colores como el morado, el rosa o el azul aunque también las hay blancas.", image: "flores/aster.jpg"},
        {name: "ASTILVA", estacion: "verano", description:  "Se cultivan como perennes herbáceos robustos, por su hermoso y gran follaje, a menudo como helecho, y densas y plumosas flores. Requieren un suelo turboso para su cultivo.", image: "flores/astilva.jpg"},
        {name: "AZAFRAN", estacion: "otono", description: "Flor de tamaño medio y tallo corto (20 cm) sumamente estrecho. Muestra seis grandes pétalos de color morado, anchos y alargados, generalmente en forma de campana invertida aunque pueden llegar a abrirse completamente.", image: "flores/azafran.jpg"},
        {name: "BREZO", estacion: "invierno", description: "Las flores del brezo, de forma acampanada y más o menos pequeñas, están reunidas de forma muy abundante en el extremo de sus delgadas ramas y son de color rosa o lila claro, blanco, y en algunos casos, rosas con los bordes blancos", image: "flores/brezo.jpg"},
        {name: "BUGANVILLA", estacion: "invierno", description: "Es una planta perenne, trepadora, leñosa, que alcanza hasta 10 m de altura. Sus Flores son muy pequeñas, blancas, en grupos con brácteas coloridas papilosas. Se dispone de variedades de sola o doble flor. El tronco leñoso tiende a enroscarse, y las delgadas ramas tienen afiladas espinas y hojas verde oscuras.", image: "flores/buganvilla.jpg"},
        {name: "CAMELIA", estacion: "invierno", description: "Se caracteriza por sus flores solitarias de colores rosas, rojos o blancos que carecen de fragancia y sus hojas son de color verde oscuro.", image: "flores/camelia.jpg"},
        {name: "DALIA", estacion: "verano", description: "Se caracterizan por sus flores redondeadas, similares a una bola de algodón o a un pompón. A parte de su peculiar aspecto, destacan también por la llamativa variedad de colores que pueden adoptar sus pétalos.", image: "flores/dalia.jpg"},
        {name: "BOCA DE DRAGON", estacion: "invierno", description: "Es una planta característica por sus llamativas flores, que crecen en racimos, y que son capaces de dar vida y colorido a cualquier rincón de tu jardín.", image: "flores/dragon.jpg"},
        {name: "JASMIN", estacion: "verano", description: "El jazmín es un atractivo arbusto de flores amarillas y follaje siempreverde, que puede alcanzar hasta 4 metros de altura. Crece de forma muy ramificada y está recubierto por una corteza lisa y de coloración pardo-amarillenta.", image: "flores/jasmin.jpg"},
        {name: "LAVANDA", estacion: "verano", description: "Sus flores son pequeñas, de color color azul-grisáceo o violáceo, reunidas en espigas, con un cáliz tubular.", image: "flores/lavanda.jpg"},
        {name: "LIRIO", estacion: "invierno", description: "Sus tallos frondosos forman bulbos subterráneos que permiten a la flor guardar nutrientes y sobrevivir el invierno sin problemas, por eso se conocen como flores altamente resistentes.", image: "flores/lirio.jpg"},
        {name: "NARCISO", estacion: "invierno", description: "Es fácil de distinguir por sus hojas en forma de trompeta y su llamativo y alegre color amarillo.", image: "flores/narciso.jpg"},
        {name: "PETUNIA", estacion: "verano", description: "Es una flor famosa debido a sus hermosas flores multicolores en forma de trompeta. Su follaje es peludo y ramificado.", image: "flores/petunia.jpg"},
        {name: "PRIMULAS", estacion: "invierno", description: "Las prímulas presentan hojas oblongas y dentadas, de textura rugosa y color verde amarillento, más claras por el envés; suelen estar cubiertas por unos pelillos.", image: "flores/primulas.jpg"},
        {name: "TULIPAN", estacion: "primavera", description: "La flor posee un bulbo truncado basal cubierto por una túnica pilosa por dentro. Los pétalos se alzan y por lo general se encuentra acuminados (cerrados hacia adentro). El tallo muy pocas veces es ramificado y las hojas son basales (cerca al tallo), caulinares, espaciadas o lanceoladas (semi aplanadas).", image: "flores/tulipan.jpg"},
        {name: "ZINNIA", estacion: "primavera", description: "Presenta un porte pequeño, pues su altura no supera los 90 cm. Su follaje está conformado por unas hojas ásperas, con forma oval y de color verde muy oscuro.", image: "flores/zinnia.jpg"},
    ]
function Flowers (){
    const [flowers, setFlowers] = useState(Information);
    return (
        <><div class="flower">
            <ol type="I" >
                {flowers.map((flower) => 
                    ( <li className="flower-item"> 
                        <h3>{flower.name} </h3>
                        <p>{flower.description} </p>
                        <img src={flower.image}/>
                    </li>))}
            </ol>
        </div></>
    )
}

export default Flowers;