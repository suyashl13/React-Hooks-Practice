import React, { useContext } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheckDouble } from 'react-icons/fa'
import { TodoContext  } from '../context/TodoContext'
import { REMOVE_TODO  } from '../context/action.types'


export default function Todos() {
    const { todo, dispatch } = useContext(TodoContext);

    return (
    <ListGroup className="mt-6 mb-2 items">
        {
            todo.map(todo=><ListGroupItem key={todo.id}>
                {todo.todoString}
                <span className="float-right" onClick={()=>{
                    dispatch({
                        type : REMOVE_TODO,
                        payload : todo.id
                    })
                }}>
                <FaCheckDouble/>
                </span>
            </ListGroupItem>)
        }
    </ListGroup>
    )
}
