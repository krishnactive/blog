import { useEffect, useState } from "react"
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true); //while data is being fetched then loading is displayed after while not 

    useEffect(()=>{
       setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
             setBlogs(data);
             setIsPending(false);
        });
       }, 1000);//fetch function will work after 1 second that is 1000ms never do this because it takes additional one second along with time taken for fetching data
    }, []);

    return ( 
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {blogs&&<BlogList blogs = {blogs} title = "All blogs!" />}
            
        </div>
    );
}    
export default Home;


