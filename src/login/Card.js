import React from 'react'

const Card = () => {



  const [tasks,addTask] =React.useState([]);
    const [username,setUsername] = React.useState('');
    const [userpwd,setPwd] = React.useState('');
    const handleUsername =(ev) =>{
      console.log(ev);
      setUsername(ev.target.value)
    }

    const handleUserpwd =(eve) =>{
      console.log(eve);
      setPwd(eve.target.value)
    }

   const handleSubmit =() =>{

    const temp ={
      username,
      userpwd
    }
    addTask([...tasks,temp])
    console.log(temp)
   }
  return (
    <div><div className='list-of-tasks-todo'>
  
    <input type="text" name="add" id="Uname" placeholder="Title" onChange={(handleUsername)} ></input>    
    <br></br>
      
    <input type="Password" name="desc" id="Pass" placeholder="description" onChange={(handleUserpwd)} ></input>  
    <br></br>  
    <input type="button" name="log" id="log" value="Add Tasks" onClick={()=> handleSubmit()} ></input>
  
  <form></form>
  {tasks?.map((item,index) => <h1 key={index}>{item.username}</h1>)}
 

</div>
</div>
  )
}

export default Card