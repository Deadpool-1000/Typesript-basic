import todo from '../models/todo';
import styles from './ListItems.module.css'
const ListItems:React.FC<{item:todo,removeTodo:(todo:todo)=>void}>=(props)=>{
    return (
        <li onClick={()=>props.removeTodo(props.item)} className={styles.item}>{props.item.name}</li>
    )
}
export default ListItems;