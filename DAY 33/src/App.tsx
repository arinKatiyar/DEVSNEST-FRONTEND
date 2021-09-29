import React,{FC,ReactElement} from 'react';
import logo from './logo.svg';
import './App.css';
const age : number=10;
interface AppProps{
  title:string;
  description:string;
}
const  App:FC<AppProps>=({title,description}):ReactElement=> {
  return (
    <div className="App">
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
