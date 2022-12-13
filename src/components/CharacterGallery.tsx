import {Character} from "./characters";
import CharacterCard from "./CharacterCard"

export default function CharacterGallery() {
    return (
        <ul className={"Gallery"}>
            {Character.map(people => (
                <CharacterCard key={people.id} name={people.name} image={people.image} origin={people.location.name}/>
            ))}
        </ul>
    )
}