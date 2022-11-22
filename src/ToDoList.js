import React, {useState} from "react";
import AddNewInput from './AddNewInput';

const ToDoList = () => {


    const addToDo= (text)=> {
        setToDo([
            ...toDo,
            {'text': text, 'id': Math.random()}
        ])
    }

    const [toDo, setToDo] = useState([
            {'text': ' Pay Billet', 'id': 1},
            {'text': 'Do your homework', 'id': 2},
            {'text': 'Feed the dog', 'id': 3},

        ]
    )

    console.log("toDo"+JSON.stringify(toDo));

    return (
        <div>
            <ul>
                {
                    toDo.map((element) =>{
                        return ( <li key={element.id}> {element.text} </li>);

                })}


            </ul>

        <AddNewInput addToDo = {addToDo}></AddNewInput>

        </div>
    )

}
export default ToDoList;