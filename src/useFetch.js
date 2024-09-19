import {useState, useEffect} from 'react';

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); 
    const [error, setError] = useState(null);


    useEffect(()=>{
        setTimeout(() => {
         fetch(url)
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
                 setIsPending(false);
                 setError(err.message);
             }) 
        }, 1000);
     }, [url]); // this dependency if whenever url is gonna changes its going to re-run this function to get the data for that endpoint 

     return {data, isPending, error}
}

export default useFetch