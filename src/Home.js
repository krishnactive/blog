const Home = () => {
    const handleClick = (e)=>{
        console.log('hello, ninjas',e)
    }
    const handleClickagain = (name,e)=>{
        console.log("Hello"+name,e.target);
    }
    return ( 
        <div className="Home">
            <h2>Homepage</h2>   
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>{handleClickagain(' krishna',e);}}>Click me again</button>
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