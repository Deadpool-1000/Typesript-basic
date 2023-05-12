import { useRef} from "react";
import styles from './NewTodo.module.css';
const NewTodo:React.FC<{addTodo:(text:string)=>void}> = (props)=>{
    const textRef=useRef<HTMLInputElement>(null);
    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const text= textRef.current!.value;
        if(text.trim().length===0){
            return;
        }
        props.addTodo(text);
    }
    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <label htmlFor="text">Please Enter your todo: </label>
            <input type="text" id="text" ref={textRef}/>
            <button type="submit">Submit</button>
        </form>
    )
    
}
export default NewTodo;