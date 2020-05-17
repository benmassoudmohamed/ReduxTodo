import React from 'react';
import { connect } from 'react-redux';
const App2 = (props) => {
    return (  <div>
        <div className="div1">
    <h1 className="class1">Daily TODO Lists</h1>
    <h6>Add new TO-DO</h6>
    <input type="text"  placeholder="Add your TO-DO" onChange={(e)=>props.SetInput(e.target.value)} />
   
    <button class="button" onClick={()=>props.AjoutItem(props.InputValue)}>Add</button>
  
    </div>
    </div>

    );
}
const mapDispatchToProps=(dispatch)=>{
      return{
        SetInput:(a)=>dispatch({type:"SET_INPUT",payload:a}),
        AjoutItem:(a)=>dispatch({type:"ADD_ITEM",payload:{item:a,id:Math.random(),isChecked:false}})


      }
}
const mapStateToProps=(state)=>{
    return{
        InputValue:state.InputValue,

    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App2) ;