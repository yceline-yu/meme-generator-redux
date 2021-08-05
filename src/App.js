import React from 'react';
import MemeForm from './MemeForm';
import MemeList from './MemeList';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

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
      <MemeForm handleSave={submit}/>
      <hr/>
      <MemeList memes={memeList} remove={remove}/>
    </div>
  );
}

export default App;
