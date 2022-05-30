import React,{useState,useEffect} from 'react'
import styles from './Modal.module.css'


function Modal({setshowModal,editData,notes,setNotes}) {
const [noteContent, setnoteContent] = useState(editData.content);
let editHandler=()=>{
    let findIndex= notes.findIndex((obj => obj.id ==editData.id));
    console.log(findIndex,editData);
    notes[findIndex].content=noteContent;
    setNotes(notes);
    setnoteContent("");
    setshowModal(false);
}

useEffect(() => {
  setnoteContent(editData.content);
}, [editData])


  return (
    <div className={styles.modal}>
        <textarea value={noteContent} onChange={(e)=>{setnoteContent(e.target.value)} }/>    
        <button onClick={editHandler}>Edit</button>
    </div>
  )
}

export default Modal