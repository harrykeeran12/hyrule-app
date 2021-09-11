import React from "react";
import axios from 'axios';
import { useState} from "react";
import './Search.css';

//Try and get all the arrays into one name array to put into a dropdown box



const Search = () => {
  const [Names, setNames] = useState({list: []})

  async function getAllNames() {
    let temp = []
    const response = await axios.get('/api/names');
    let names = response.data
      /* setNames(response.data)  */
    for (let i = 0; i < names.length; i++) {
      temp.push(names[i]);
        
    }
    /* setNames({list: ['hello', 'world']}) */
    setNames({list: temp})

  }
  getAllNames()
 
  
  
  
  return ( 
    <p className='Searchbar'>
      {Names.list.map(item => (
      <p key={item.index}>{item}</p>
    )
    )
    }</p>
   );
}
 
export default Search;