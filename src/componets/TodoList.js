import React from 'react';
import {connect} from 'react-redux'
const TodoList = (props) => {
    return ( <div>
        {props.TodoList.map((el,i)=><div Key={i}>
            {console.log(el)}
            <input type='checkbox' onChange={()=>props.CheckSet(el.id)}/>
            <span className={(el.isChecked)&&"checked"}>{el.item}</span>
            <button onClick={()=>props.EditItem(el.id)}>Edit</button>
            <button onClick={()=>props.DeleteItem(el.id)}>Delete</button>

        </div>)}

    </div> );
}

const mapDispatchToProps=(dispatch)=>{
    return{
        EditItem:(id)=>{ 
            var newItem=prompt('add your new item'," ")
            dispatch({type:"EDIT_ITEM",payload:{id:id,Newvalue:newItem}})},
        DeleteItem:(id)=>dispatch({type:"DELET_ITEM",payload:id}),
        CheckSet:(id)=>dispatch({type:"CHEC_ITEM",payload:id})
           
    
        }
    }
const mapStateToProps=(state)=>{
    return{
        TodoList:state.ToDoList,   
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (TodoList);