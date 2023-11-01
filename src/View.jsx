import React, { useState } from "react";

function View({ todo ,onDelete,handleEdit,setTask,saveEdit,updatedValue}) {
 

  return (
    <div>
      <h1 className="text-3xl overflow-hidden  underline font-extrabold">
        Tasks:
      </h1>
      <div className="h-[24rem] overflow-y-scroll scrollbar-hide my-2">
        {todo?.map((item,index) => (
          <div className="mt-4 bg-blue-100 w-full scrollbar-hide h-10 items-center flex justify-between  rounded-md px-4">
           {item.isClicked===true? 
           <input type="text" onChange={(e)=>updatedValue(e,item)} className="px-3 outline-none bg-blue-100" defaultValue={item.list}/>:<li>{item.list}</li>
          } 

            <div>
              {item.isClicked===true? <button className="mr-5 bg-blue-50 px-3 rounded-full bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-900 text-gray-100 font-bold items-center justify-center outline-none " onClick={(id)=>saveEdit(item,index)}>Save</button>:<button onClick={(id)=>handleEdit(item,index)} title="Edit">
                <i className="fa-solid fa-pen-to-square me-5 "></i>
              </button>}
              <button onClick={()=>onDelete(item.id)} title="Delete">
                <i className="bg-red-700 text-transparent bg-clip-text fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;



