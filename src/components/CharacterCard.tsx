import {Card} from "./Card";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";
import Hello from "../Hello";

export default function CharacterCard({id, name, image, status} : Card) {

 return (
     <BrowserRouter>
         <div className={"Card"}>
            <Link className={"Link"} to={"/hello/"+id} state={{name: name}}>{name}</Link>
            <img src={image}/>
            <p>{status}</p>
        </div>

         <Routes>
             <Route path={"/hello/:id"} element={<Hello/>}/>
         </Routes>
     </BrowserRouter>
        )
}
