import React,{useState} from 'react'
import styles from './Home.module.css'
import axios from 'axios'
import Spinner from '../../Components/Spinner/Spinner'
import {toast} from 'react-toastify';

function Home() {
    let initData=[{
        "code": "2pQhdk",
        "short_link": "shrtco.de/2pQhdk",
        "full_short_link": "https://shrtco.de/2pQhdk",
        "short_link2": "9qr.de/2pQhdk",
        "full_short_link2": "https://9qr.de/2pQhdk",
        "short_link3": "shiny.link/2pQhdk",
        "full_short_link3": "https://shiny.link/2pQhdk",
        "share_link": "shrtco.de/share/2pQhdk",
        "full_share_link": "https://shrtco.de/share/2pQhdk",
        "original_link": "http://www.google.com"
    }]
const [urlInput, seturlInput] = useState("");
const [urls, setUrls] = useState([...initData]);
const [loading, setLoading] = useState(false);

let shortenUrl=async()=>{
   setLoading(true);
   try{
    var res=await axios.post(`https://api.shrtco.de/v2/shorten?url=${urlInput}`);
    urls.push(res.data.result);   
   }
   catch(e){
    toast.error(e.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    console.log('error',e,e.response.data.error);
   }
   
   setLoading(false);
   
   console.log('shorten response',res);
//    if(false & res.data.ok===true){
//       urls.push(res.data.result);
//    }
//    else{
//        console.log(res.data.error,'error')
//    }
   seturlInput('');
}

let copy=(text)=>{
    navigator.clipboard.writeText(text);
}
  return (
    <div  className={styles.homeContainer}>
        <h2>More than just shorter Links</h2>
        <p>Build your brands recognition and get detailed insights on how your links are performing</p>
        <div className={styles.inputContainer}>
           <input  value={urlInput} onChange={e=>seturlInput(e.target.value)} placeholder='Shorten a link here...' />
           <button onClick={shortenUrl}>Shorten It!</button>
        </div>
        <div className={styles.urlsContainer}>
            {urls.map((url,index)=>{
                return (<div key={index} className={styles.urlCard}>
                   <div>
                       <span>{url.original_link}</span>
                       <span>{url.full_short_link}</span>
                   </div>
                   <button onClick={()=>{copy(url.full_short_link)}}>COPY</button>
                </div>)
            })}
        </div>
        {loading && <Spinner/>}
        
    </div>
  )
}

export default Home