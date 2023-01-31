

import TaskLeft from "./Taskleft";

const Display = ({dinpu,Dinput,task}) => {
    console.log(dinpu)
    
    return (  
<div className="display">
    
    <div>
   

       <p>{dinpu} </p> 
       </div> 


       
       {/* <div className="taskleft">
   <TaskLeft  Dinput={Dinput} task={task} />
   
    
   
   </div> */}


   
   
</div>

    );
}
 
export default Display;