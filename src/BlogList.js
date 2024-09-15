const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
      
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                     <p>written by {blog.author}</p>
                     <p>content: {blog.body}</p>
                </div>
            ))};
        </div>
     );
}
 
export default BlogList;

//any props we send through into a component are attached to this object which we automatically get as an argument in the component and we can access them and we can pass multiple props if we want to so it could pass in another prop <BlogList blogs={blogs}//this is dynamics value which is passed title = "all blogs"/>   
//we can destructured it as wil that which property can be passed or accepted into it
