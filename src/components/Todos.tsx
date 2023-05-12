import React from 'react';
import todo from '../models/todo';
import ListItems from './ListItems';
import styles from './Todos.module.css'
const Todos: React.FC<{items:todo[],removeTodo:(todo:todo)=>void}>= (props)=>{
    return(
        <ul className={styles.todos}>
            {props.items.map((item)=><ListItems removeTodo={props.removeTodo} key={item.id} item={item}/>)}
        </ul>
    )
}

export default Todos;