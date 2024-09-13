import { useState } from "react"

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);
    const handleClick = ()=>{
        setName('luigi');
        setAge('30');
    }
    
    return ( 
        <div className="Home">

            <h2>Homepage</h2> 
            <p>{name} is {age} years old</p>  
            <button onClick={handleClick}>Click me</button>

        </div>
    );
}    
//event object and event parameter
// handleClick this automatically reference gains the first parameter ie the event object and then we can do something with
//handleClick wrapped in anomous function have to pass it
//event have different properties which we can use it 

// parenthesis automatically invoke the function so then how to pass the function
// to implement this problem of automatically invoked we wrap that function under anomous function

 
export default Home;