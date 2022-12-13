import {Card} from "./Card";

export default function CharacterCard({name, image, status} : Card) {
 return (
        <div className={"Card"}>
            <h2>{name}</h2>
            <img src={image}/>
            <p>{status}</p>
        </div>
        )
}
