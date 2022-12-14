import {Card} from "./Card";
import CharacterCard from "./CharacterCard"
import {useState} from "react";

export default function CharacterGallery({character} : {character: Card[]}) {
    const [search, setSearch] = useState("");

    return (
        <>
            <input type="search" placeholder={"Search Character"} onChange={event => setSearch(event.target.value)}/>
            <ul className={"Gallery"}>
                {character.filter(people => people.name.includes(search))
                    .map(people => (
                    <CharacterCard key={people.id} {...people}/>
                ))}
            </ul>
        </>
    )
}