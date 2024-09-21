import {useState, useEffect} from 'react';

// making a cleanup function to stop the change router to run in background or to stop it 
// 
const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);


    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(() => {
         fetch(url,{signal: abortCont.signal})
             .then(res => {
                 if(!res.ok){
                     throw Error('could not fetch the data for that resource');
                 }
                 return res.json();
             })
             .then(data => {  //this data is local version of data that not gonna effect the global data variable
                 setData(data);
                 setIsPending(false);
                 setError(null);
             })
             .catch( err =>{
                if(err.name ==='AbortError'){
                    console.log('Fetch aborted')
                }
                else{
                    setIsPending(false);
                    setError(err.message);
                }
                 
             }) 
        }, 1000);
       return () => abortCont.abort();
     }, [url]); // this dependency if whenever url is gonna changes its going to re-run this function to get the data for that endpoint 

     return {data, isPending, error}
}

export default useFetch

// in abort error error we not want to update the state 
// component trying to update and we won't get that error 
// error anymore 
// use of cleanfunction and abort controller 