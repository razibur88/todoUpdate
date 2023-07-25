import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set,push,onValue,update, remove } from "firebase/database";

const Home = () => {
  let [text, setText] = useState("")
  let [todo, setTodo] = useState([]);
  let [editshow, setEditshow] = useState(false)
  let [id, setId] = useState("")
  const db = getDatabase();

  let handleChange = (e) =>{
    setText(e.target.value)
  }

  let handleSubmit = () =>{
    set(push(ref(db, 'ami/')), {
      kaj:text,
    }).then(()=>{
      setText("")
    })
  }

  useEffect(()=>{
    const todoRef = ref(db, 'ami/');
    onValue(todoRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        arr.push({...item.val(), key:item.key})
      })
      setTodo(arr);
    });
  },[])

 let handleEdit = (id,value) =>{
    setText(value)
    setEditshow(true)
    setId(id)
 }



 let handleUpdate = (id) =>{
  update(ref(db, "ami/" + id), {
    kaj:text,
  }).then(()=>{
    setText("")
  })
 }

 let handledelete = (id)=>{
  remove(ref(db, "ami/" + id)).then(()=>{
    console.log("deleted");
  })
 }

  return (
    <>
      <div style={ami}>
        <input onChange={handleChange} value={text}/>
        {editshow ?  <button onClick={()=>handleUpdate(id)}>update</button> : <button onClick={handleSubmit}>Add</button>}
        
       
      </div>
      <ul>
        {todo.map((item)=>(
          <li>{item.kaj} {item.key} <button onClick={()=>handleEdit(item.key, item.kaj)}>Edit</button> <button onClick={()=>handledelete(item.key)}>Delete</button></li>
        ))}
      </ul>
    </>
  )
}


let ami = {
  marginTop:"20px"
}

export default Home
