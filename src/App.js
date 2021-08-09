import React from 'react';
import MemeForm from './MemeForm';
import MemeList from './MemeList';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

/** App
 * 
 * Props:
 * -none
 * 
 * State:
 * - none
 * 
 * App -> { MemeForm, MemeList }
 */
function App() {

  const memeList = useSelector(store => store.memes);
  console.log(memeList);

  const dispatch = useDispatch();

  function submit(data) {
    let payload = {...data, id: uuidv4()}
    dispatch({type: "ADD", payload})
  }

  function remove(data) {
    let payload = {...data}
    dispatch({type: "DELETE", payload})
  }

  return (
    <div className="App">
      <h1>Create a New Meme</h1>
      <MemeForm handleSave={submit}/>
      <hr/>
      <h1>Gallery</h1>
      <MemeList memes={memeList} remove={remove}/>
    </div>
  );
}

export default App;
