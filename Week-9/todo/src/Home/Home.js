import styles from './Home.module.css';
import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal'

let data=[{id:1,content:"hello ",completed:true}]

export default function Home() {
 const [noteContent, setnoteContent] = useState("")
 const [notes, setNotes] = useState(data)
 const [showModal, setshowModal] = useState(false);
 const [editData, seteditData] = useState({});


 let addNote=()=>{
     if(noteContent.length===0)  return;
     setnoteContent("");
    setNotes((prev)=>{ return [...prev,{id:uuidv4(),content:noteContent}]})
 }
 
 let check=(e,id)=>{
    let findIndex= notes.findIndex((obj => obj.id === id));
    console.log("findIndex",findIndex);
    notes[findIndex].completed=!notes[findIndex].completed;
    setNotes(notes);
 }

 let editNote=(note)=>{
      seteditData(note);
      setshowModal(true);
 }

 let deleteNote=(id)=>{
     let newNotes=notes.filter((note)=>{ return note.id!==id})
     setNotes(newNotes) 
 }

    return (
    <div className={styles.parentContainer}>
        <div className={styles.inputParent}>
           <div className={styles.inputWrapper}>
              <input value={noteContent} onChange={(e)=>{setnoteContent(e.target.value)}} placeholder='Write a note...'/>
              <i class="bi bi-plus-lg" onClick={addNote}></i>
           </div>
        </div>

        <div className={styles.notesContainer}> 
          {notes.map((note)=>{ return   ( 
          <div key={note.id} className={styles.card}>
             <div className={styles.checkboxContainer}>
                <input onChange={(e)=>{check(e,note.id)}} defaultChecked={note.completed} type='checkbox'/>  
             </div>  
             <div className={styles.contentContainer}>
                <p>{note.content}</p>
                <div className={styles.cardButtons} >
                   <i onClick={()=>{editNote(note)}} class="bi bi-pencil-square"></i>
                   <i onClick={()=>{deleteNote(note.id)}} class="bi bi-trash3-fill"></i>
                </div>
             </div>
          </div>
          )})}
       
        </div>
        {showModal && <Modal editData={editData} notes={notes} setNotes={setNotes} setshowModal={setshowModal}/> }
    </div>
  )
}
