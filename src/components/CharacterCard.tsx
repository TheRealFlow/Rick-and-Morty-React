import {Card} from "./Card";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";
import Detail from "../Detail";

export default function CharacterCard({id, name, image, status} : Card) {

 return (
     <BrowserRouter>
         <div className={"Card"}>
            <Link className={"Link"} to={"/hello/"+id} state={{char: name}}>{name}</Link>
            <img src={image}/>
            <p>{status}</p>
        </div>

         <Routes>
             <Route path={"/hello/:id"} element={<Detail/>}/>
         </Routes>
     </BrowserRouter>
        )
}
