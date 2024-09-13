import { useState } from "react"
//this hook will be used more futher its important
const Home = () => {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Understanding React Hooks",
            body: "React hooks allow you to use state and other React features without writing a class. The most commonly used hooks are useState and useEffect.",
            author: "Alice Johnson"
        },
        {
            id: 2,
            title: "JavaScript ES6 Features",
            body: "ES6 introduced several important features like arrow functions, template literals, and destructuring that made JavaScript more powerful and easier to write.",
            author: "Bob Smith"
        },
        {
            id: 3,
            title: "CSS Grid Layout Guide",
            body: "CSS Grid is a two-dimensional layout system that provides flexibility in creating web designs. It allows you to create complex layouts with ease.",
            author: "Carol White"
        },
        {
            id: 4,
            title: "Asynchronous JavaScript with Promises",
            body: "Promises in JavaScript provide a cleaner way to work with asynchronous operations. They allow handling of asynchronous code in a more readable manner.",
            author: "David Brown"
        },
        {
            id: 5,
            title: "Introduction to TypeScript",
            body: "TypeScript is a superset of JavaScript that adds static types. It helps in catching errors early during development and improves code readability.",
            author: "Eva Green"
        },
        {
            id: 6,
            title: "Version Control with Git",
            body: "Git is a powerful version control system used by developers worldwide. It allows you to track changes, collaborate on projects, and manage code efficiently.",
            author: "Frank Harris"
        },
        {
            id: 7,
            title: "Building RESTful APIs with Node.js",
            body: "Node.js allows for creating fast and scalable network applications. Learn how to build RESTful APIs using Express.js and Node.js.",
            author: "Grace Lee"
        },
        {
            id: 8,
            title: "Web Development with React and Redux",
            body: "Redux is a state management library that can be used with React to build scalable applications with predictable state management.",
            author: "Henry Wilson"
        },
        {
            id: 9,
            title: "Deploying Applications with Docker",
            body: "Docker simplifies the deployment of applications by allowing you to package the code along with dependencies into containers that can run anywhere.",
            author: "Isabella Taylor"
        },
        {
            id: 10,
            title: "Responsive Web Design with Media Queries",
            body: "Media queries are a key tool in responsive web design, allowing you to create layouts that adapt to different screen sizes.",
            author: "Jack Martinez"
        }
    ]);

    //array destructuring :-  const [blogs, setBlogs] blogs refer to the current state value and setBlogs is the function you use to update that state value 
    //key property can track the deleted items in this can id can be key because it is unique
    return ( 
        <div className="Home">
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

 
export default Home;