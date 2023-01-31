import banner from './banner.jpg'
import nature1 from './nature1.jpg';
import nature2 from './nature2.jpg'
import './App.css';
import {useState} from 'react'
import Display from './display';
import Navbar from './Navbar';
import TaskLeft from './Taskleft';

function App() {
  const [inputs,setInputs] = useState([])
  const [Dinput,setDinputs]= useState([])
  const [task,setTask] = useState()

  const handleChange = (e) => {
    setInputs(e.target.value)
    
  }
  

  const handleClick = (e) => {
    e.preventDefault()
    setDinputs(prev => ([...prev,inputs]))
    setInputs('')
    setTask(Dinput.length + 1)   
  }
  const handleDelete = (value) => {
    setDinputs(oldvalue => {
return oldvalue.filter(dinpu => dinpu !== value)
    })
    setTask(prev => prev -1)
  }
  return (
    <div className="App">
      <div>
      <div className='Imgdiv'>
        <img src={nature2} alt='banner' />
        </div>       
      <form className='fcontainer'>
      <input    
      type='text'
      value={inputs}
      onChange={handleChange}
      placeholder='What are you doing today?'
      />
  <button className='fbutton'  onClick={handleClick}>add</button>
  </form>

<div className='Dcontainer'>
{Dinput.map((dinpu)=> {
  return  <div className='display' >
    <div style={{display:"flex", alignItems:"left",justifyContent:'left', marginTop:"20px", marginLeft:'10px'}}>
    <Display dinpu={dinpu} Dinput={Dinput} task={task}/>  
    </div>
  <button className='Ibutton' style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:"0px"}} onClick={()=> handleDelete(dinpu)} >Done</button>
  </div>
  
})}
  
  </div>
  </div>
  <div className='taskleft'>
  <TaskLeft  Dinput={Dinput} task={task} />
  </div>
   
         </div>
  );
}

export default App;
