import React, { useState } from 'react';
import Input from "./components/Input";
import Display from "./components/Display";
import './App.css';

function App() {
  const username = "kevin";
  const [skillList, setSkillList] = useState([]); 
  
   
  return (
    <div className="App">
      <h1>You Have Got Skills</h1>
      <Input name={username } skillList={skillList} setSkillList={setSkillList}/>
      {/* passing in getter in setter passing them to input through props */}
      <Display name={username}skillList={skillList} setSkillList={setSkillList}/>
    </div>
  );
}  

export default App;
