import {Card} from "./Card";
import CharacterCard from "./CharacterCard"

export default function CharacterGallery({character} : {character: Card[]}) {
    return (
        <ul className={"Gallery"}>
            {character.map(people => (
                <CharacterCard key={people.name} {...people}/>
            ))}
        </ul>
    )
}