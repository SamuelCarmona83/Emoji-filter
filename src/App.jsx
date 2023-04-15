import { useState } from 'react'
import './App.css'

import jsonList from './assets/emojiList.json'


function App() {

  const [emojiList, setEmojilist] = useState(jsonList)

  const [search, setSearch] = useState('')


  return (
    <div className="App">
       <div>
          <h2>Emoji Filter App! 😳</h2>
          {search}
          <div>
            <input onKeyUp={(evt)=>setSearch(evt.target.value)} />
            <i>🔍</i>
          </div>
          <ul style={{listStyle:'none'}}>
          { search == '' && emojiList.map((emoji, index)=> <Emoji key={index} item={emoji} />)}
          {
            search != '' &&
              emojiList.filter( (item) => item.title.toLowerCase().includes(search.toLowerCase())
                || item.keywords.toLowerCase().includes(search.toLowerCase())
              )
              .map((emoji, index)=> <Emoji key={index} item={emoji} /> )
          }
          </ul>
       </div>
    </div>
  )
}


const Emoji = (props) => {
  return (<>
    <li style={{ border: '1px solid gray', borderRadius: '5px', margin: '5px'}}>
      <h3>{props.item.title}</h3>
      <span>{props.item.symbol}</span>
      <p>{props.item.keywords}</p>
    </li> 
  </>)
}

export default App
