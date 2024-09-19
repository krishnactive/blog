import { useEffect, useState } from "react"
import BlogList from "./BlogList";
import useFetch from './useFetch'

const Home = () => {
    const {data:blogs, isPending, error}  = useFetch('http://localhost:8000/blogs') //naming other name use : after actual name
 // function can be used multiple time and it also become neater and tidier as well and they're much eaiser to read
    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs&&<BlogList blogs = {blogs} title = "All blogs!" />}
            
        </div>
    );
}    
export default Home;

// we need to do things in another component in future where we fetch some data
    // we create state for the data itself essential we have write all those code of error isPending
    //reuseability to have this
    // custom hooks 
    // In React, a custom hook is a JavaScript function that allows you to reuse 
    // stateful logic across multiple components. Custom hooks enable you to 
    // encapsulate and share common logic that can involve using React’s 
    // built-in hooks (like useState, useEffect, useContext, etc.), so you don’t 
    // have to repeat yourself (DRY principle) in different components.
