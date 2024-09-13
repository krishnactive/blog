
// import './App.css';
//this div is injected into the html file
//app.js this called as root component of application meaning ie first component that is going to be rendered to the DOM Index file render it right there
//  function App() {
  
//   const title = "Welcome to the new blog";
//   const likes = 50 ;
//   // const person = {name:'Yoshi', age: 30};
//   const link = "http://www.google.com"
//   const handleClick = (event,url)=>{
//     event.preventDefault(); //prevent page reload
//     window.open(url,"_blank"); //prevent the current page from reload but open the passed url in new tab
//     console.log ("relaod prevented");
//   };
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked {likes} times</p>
//         {/* <p>{person}</p> */}
//         <p>{[1,2,3,4]}</p>
//         <p>{"krishna kk"}</p>
//         <p>{Math.random()*10}</p>
//         <a href={link} onClick={(event)=>handleClick(event,link)}>Google site</a>
//       </div>
//     </div>
//   );
// }

//for prventing page reload or any thing u can use functions that prevent it in attributes u can add function to preform any task if required
//dynamuics value for any attribute ... just use curly brackets{}
//curly brackets for dynamics value input for

// now navbar.js must be imported here anywhere in the app function which is passed to index.js file which is going to be renderd in html.js

import './App.css';
import Navbar from './Navbar'; //selfclosing in or it can be other type also
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}
export default App;
