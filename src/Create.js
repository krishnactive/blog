import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// useHistory for back forth movement of tab keeping track and going back in history



const Create = () => {
    //tracking the input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    //making post a request
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,body,author};

            setIsPending(true);

            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {"content-Type":"application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log("New blog added");
                setIsPending(false);
                //history.go(-1); takes to previous page after submitting the form 
                history.push('/');//instead go to home page placing route of home page
            })
            
    }



    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea   
                    required
                    value = {body}
                    onChange= {(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending&&<button>Add Blog</button>}
                {isPending&&<button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 //submit event or button click event to submit the form
export default Create;