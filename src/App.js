
import './App.css';
//this div is injected into the html file
function App(e) {
  
  const title = "Welcome to the new blog";
  const likes = 50 ;
  // const person = {name:'Yoshi', age: 30};
  const link = "http://www.google.com"
  const handleClick = (event,url)=>{
    event.preventDefault(); //prevent page reload
    window.open(url,"_blank");
    console.log ("relaod prevented");
  };
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{[1,2,3,4]}</p>
        <p>{"krishna kk"}</p>
        <p>{Math.random()*10}</p>
        <a href={link} onClick={(event)=>handleClick(event,link)}>Google site</a>
      </div>
    </div>
  );
}

//for prventing page reload or any thing u can use functions that prevent it in attributes u can add function to preform any task if required
//dynamuics value for any attribute ... just use curly brackets{}
//curly brackets for dynamics value input for
export default App;
