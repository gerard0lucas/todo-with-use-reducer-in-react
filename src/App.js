import {useReducer,useState} from 'react'
import './App.css';

const initialState = [];

function reducer(state,action){
  switch(action.type){
    case "add" :return[
      ...state,{
        id:state.length+1,
        desc:action.payload
      }
    ]

    case "delete" : return state.filter((e)=> e.id !== action.payload)

    default: return state;

  }
}

function App() {
  const [todos,dispatch] = useReducer(reducer,initialState)
  const [text,settext] = useState('')

const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch({
    type:'add',
    payload: text
  })
  settext("")

  
}

  
  return (
    <div className="App">
      <h1>Todo list app</h1> 
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
        <button>submit</button>
      </form>
      <h2>Lists:</h2>
      <div className="list">
        {todos.map((t)=>(
          <div className='single'>
          <input className='in' type="checkbox" />
          <p key={t.id}>{t.desc}</p>
          <button onClick={()=>dispatch({type:'delete',payload:t.id})} className='del'>Delete</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
