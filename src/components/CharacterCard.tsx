
export default function CharacterCard(props: {name: string, image: string, origin: string}) {
 return (
        <div className={"Card"}>
            <h2>{props.name}</h2>
            <img src={props.image}/>
            <p>{props.origin}</p>
        </div>
        )
}
