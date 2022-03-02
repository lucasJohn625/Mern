
import React, {useState} from "react";
import Display from "./components/Display";
import Tabs from "./components/Tabs";
import './App.css';

function App() {
    // 1st create an array of for each tab, 3 tabs total
  const tabList = [
    {
      //create kley value pairs
      label: "tab 1", //0
      content: "Content for the first tab"
    },

    {
      label: "tab 2", //1
      content: "Content for the second tab"
    },

    {
      label: "tab 3",//2
      content: "Content for the third tab"   

    },
  ]
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">

      <Tabs tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab}/>


      <Display tabText={tabList[activeTab].content}/>

    
    </div>
  );
}

export default App;
