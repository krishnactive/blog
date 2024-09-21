import { useParams } from "react-router-dom/cjs/react-router-dom.min";
//useParams : allows us to grab parameters or route parameters fromt the route
// need to destructure whichever route parameters we want 
const BlogDetails = () => {
    const { id } = useParams();

    return ( 
        <div className="blog-details">
            <h2>Blogs Details - { id }</h2>
        </div>
    );
}
 
export default BlogDetails;