import {useRef} from "react";
import './style.css'

interface Props{
  todo:string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent)=>void;
}
const InputFeild = ({todo, setTodo , handleAdd}:Props) => {
   
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <div>
      <form className="input"   
      onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        
       } }>
        <input type="input" 
        ref={inputRef}
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
        placeholder="Enter a task " className="input__box"/>
        <button type="submit"
         className="input__button">GO</button>
      </form>
    </div>
  )
}

export default InputFeild
