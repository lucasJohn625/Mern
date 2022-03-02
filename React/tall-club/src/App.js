import Form from "./components/Form";
import Display from "./components/Display";
import './App.css';
import React, { useState } from 'react';


function App() {
  const{studentList, setStudentList}= useState([]);


  return (
    <div className="App">
      <Form />
      <Display />
    </div>
  );
}

export default App;
