
import {  useEffect, useState } from 'react';
import './App.css';
import View from './View';

function App() {
  const [edit,setEdit] = useState(false);
  const [task,setTask] = useState();
  const [todo,setTodo] = useState([]);
  console.log(todo);
  const addTodo = (e)=>{
    e.preventDefault();
    if(todo!==""){
        setTodo([...todo,{list:task,id:Date.now(),isClicked:false}]);
    setTask("");
    setEdit(false)
    
    }
  } 

  const onDelete=(id)=>{
    setTodo(todo.filter((item)=>item.id !== id));

  }

  const handleEdit = (item,index) =>{
    setEdit(true)
    item.isClicked = true;
    console.log(item);
  }

  const saveEdit=(item,index)=>{
    console.log(index);
    setEdit(false)
    item.isClicked = false;
    console.log(item);
    setTask("");
   todo[index]=newValue
}
  const [newValue,setNewValue]=useState()
  const updatedValue=(e,item)=>{
   setNewValue ( {...newValue,list:e.target.value,id:item.id,isClicked:false})
  }

  const newItem = 
 useEffect(()=>{

 },[todo])




  return (
    <div className='bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-900 h-screen w-full flex flex-col   items-center'>
      <h1 className='bg-gradient-to-br from-indigo-700 via-purple-300 to-gray-900 text-transparent bg-clip-text mt-24 mb-12 text-7xl h-24 overflow-hidden  font-extrabold tracking-wide'>ToDo List</h1>
      <div className='h-20 lg:w-5/12 md:w-6/12 w-9/12'>
        <form className='w-full relative h-max ' >
        {edit===false?
          <input  onChange={(event) => {setTask(event.target?.value)}} value={task} type="text" className='bg-blue-100  shadow text-lg rounded-full outline-none border-color-white border-solid py-4 px-8 pr-16 w-full ' placeholder="List here..."/>:<input disabled  type="text" className='bg-blue-100 text-lg rounded-full shadow outline-none border-color-white border-solid py-4 px-8 pr-16 w-full ' placeholder="List here..."/>}
         <button onClick={addTodo}  type='submit' className='h-4/5 aspect-square absolute right-1 top-[13%]'>
           <i className="fa-solid fa-circle-plus text-4xl">
            </i></button>
            
        
        </form>
      </div>
      <div className=' lg:w-[40rem] md:w-6/12 w-9/12'>
        <View todo={todo} onDelete={onDelete} edit={edit} setTask={setTask} saveEdit={saveEdit}  handleEdit={handleEdit} updatedValue={updatedValue}/>
      </div>
    </div>
  );
}

export default App;
