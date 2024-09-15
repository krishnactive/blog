import { useEffect, useState } from "react"
import BlogList from "./BlogList";
//this hook will be used more futher its important
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    //null because data to be fetched from json file and after fetching it must be updated in usestate function
    // const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); //filter non id delete elements from given data and making original blog equal to this element
        setBlogs(newBlogs);
    }

    //runs every time it rerender
    //we use it for fetch data or communicate with some kind of authentication service those knows as side effect in react but now we simple doing consolelog
    // useEffect fires a function
// npx json-server --watch data/db.json --port 8000
//for making GET response we are doing this 


    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
             setBlogs(data);
        });
    }, []);

    return ( 
        <div className="Home">
            {blogs&&<BlogList blogs = {blogs} title = "All blogs!" handleDelete = {handleDelete}  />}
             {/* <button onClick={()=>{setName('luigi')}}>change name</button> if name is changed then useEffect will rerender the useState function and updated is displayed because name is dependency so if it changes then only useEffect will trigger  */}
             {/* <p>{name}</p> */}
            {/* <BlogList blogs = {blogs.filter((blog)=>blog.author==="Isabella Taylor")} title = "Isabella Taylor's blogs!!" /> */}
        </div>
    );
}    
//json server:- fake api just a json file that we can use to test this out so



//lets add css to blog preview
//we map through the data and we take each item into that as we map through it and we output a bit of templete for each and each one has a key property which is the id in our case but it can be any unique property 
//inside templete javascript can be implemented using curly braces
//map method in javascript it just cycle through an array and it can do something with each item in array
//hard code is not benifecial it time comsuming

//create block to represent these state
//event object and event parameter
// handleClick this automatically reference gains the first parameter ie the event object and then we can do something with
//handleClick wrapped in anomous function have to pass it
//event have different properties which we can use it 

// parenthesis automatically invoke the function so then how to pass the function
// to implement this problem of automatically invoked we wrap that function under anomous function
//we can filter out which we needed to display blogs.filter((blog)=>blog.author=='kk')
 
export default Home;


//not placing the data directly in BlogList but keeping it Home and using props to pass the data because of three reasons
//1) list component more reusable and we'll see exactly how later on
//2) it allows me to still use this data in the home component later on if i need it in the future because the data is still going to be declared here
//3) it allows me to show how to use props all right 
// props are a way to pass data from one component a parent cpmponent into a child component so this(Home.js) is the parent componet and BlogList is child component right there so we need to pass the blog data into the blogslist component
// we do this props by making a property name on bloglist 
// useeffect not return anything to us so we not store it in const or anything
