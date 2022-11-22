import React, {useState} from "react";

const AddNewInput=({addToDo})=>{

    const [toDo, setToDo] = useState('');


    const handleable=(e)=>{
       e.preventDefault();
        console.log("toDo"+toDo);
        addToDo(toDo)
    }

    return (
        <form  htmlFor="todo" onSubmit={handleable}>
            <input type= 'text' id="todo"  value={toDo} onChange={(event) => setToDo(event.target.value)}/>
            <input type= 'submit'  />
        </form>
    )
}
export default AddNewInput