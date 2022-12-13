
export default function CharacterCard(props: {name: string, image: string, origin: string}) {
 return (
        <div className={"Card"}>
            <h3 className={"name"}>{props.name}</h3>
            <img className={"image"} src={props.image}/>
            <p className={"origin"}>{props.origin}</p>
        </div>
        )
}
