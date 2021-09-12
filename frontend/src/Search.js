import React from "react";
import axios from 'axios';
import { useState} from "react";
import './Search.css';

//Try and get all the arrays into one name array to put into a dropdown box



const Search = () => {
  const [Names, setNames] = useState({list: []});
  const [Suggestions, setSuggestions] = useState([])
  const [Text, setText] = useState('')

  async function getAllNames() {
    let temp = []
    const response = await axios.get('/api/names');
    let names = await response.data;
      /* setNames(response.data)  */
    for (let i = 0; i < names.length; i++) {
      temp.push(names[i]);
    }
    /* setNames({list: ['hello', 'world']}) */
    setNames({list: temp});

  }

  getAllNames();
 
  function onTextChange(e){
    const value = e.target.value;
    if (value.length === 0){
      setSuggestions([]);
    }
    else{
      const regex = RegExp(`^${value}`, 'i');
      const suggestions = Names.list.filter(v => regex.test(v))
      setSuggestions(suggestions)
      setText(value)
      console.log(value) 
    }
    
  }
  
  function renderSuggestions(){
    if (Suggestions.length === 0) {
      return null
    }
    return(
      <ul>
      {Suggestions.map((item) => (
        <li key={item.index}>{item}</li>
      ))}
    </ul>
    )
  }
  
  return (
    <div className='Searchbar'>
    <input type='text' onChange={onTextChange} value={Text}></input>
    {renderSuggestions()}
    </div>
   );
}
 
export default Search;