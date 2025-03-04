// Comnponents are functions that return some JSX

//JSX is a javascript syntax in React to create our HTML elements

"use client";

import { useState } from "react" // we use this to add state to our components
// state lets us keep track of changing data and show it in the component

import Form from "./components/Form"
import Table from "./components/Table"
function HomePage(){
    return (
        <div>
            <h1> FavLinks </h1>

         <Form />

          {/* A table the user can use to see their submissions */}

         <Table />


        </div>
    )
}
export default HomePage