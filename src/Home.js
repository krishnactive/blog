import { useEffect, useState } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true); //while data is being fetched then loading is displayed after while not 
    const [error, setError] = useState(null);
    //ok property of fetch api In JavaScript (and particularly in the context of the Fetch API),
     //the res.ok property is a boolean that indicates whether the HTTP response was successful.
     // It is true if the status code of the response is in the range 200–299, which generally signifies a successful response
    //  true if the response status code is between 200 and 299
    // false if the response status code is outside that range (like 404, 500, etc.).
    // if we console res then ok will be shown as a property which is a boolean which tells that response was successfully processed or not
    // if false then we throw a error and will be catched by the .catch property or function
    // instead of console we can also store in a state
    // if we change the api which does't exists then ok will be false // that end point is faulty // that will make request to server, the server will send an error back so ok will be fire and error will be thrown
    // storing the error is some kind of state
    // in return of Home we can do conditional rendering if we have a value for error so again conditional rendering error
     // conditional rendering means that exist then only we render it making div h1 or other property that wiil be show on the screen 
    useEffect(()=>{
       setTimeout(() => {
        fetch('http://localhost:8000/blogss') //blogs
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch( err =>{
                // console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }) //catch any kind of network error and fire this function //generally connection error
       }, 1000);//fetch function will work after 1 second that is 1000ms never do this because it takes additional one second along with time taken for fetching data
    }, []);

    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs&&<BlogList blogs = {blogs} title = "All blogs!" />}
            
        </div>
    );
}    
export default Home;


