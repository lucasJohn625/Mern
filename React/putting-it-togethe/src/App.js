
import './App.css';
import Child from './components/Child'

function App() {

  const coolObject = [
      {
          firstName: "Jane",
          lastName: "Doe",
          Age: 45,
          hairColor: "Black",
          
      },
      {
        firstName: "John",
        lastName: "Smith",
        Age: 99,
        hairColor: "Brown",
        
      },
  ];
  //const [first, second] = coolObject;
  
  return  (
  

    <div className="App">
      {
      coolObject.map((member, index)=>{
        return(
          <Child 
            key={index}
            firstName={member.firstName}
            lastName={member.lastName}
            Age={member.Age}
            hairColor={member.hairColor}
                    
          />
        )
      })
    }
    </div>
    
        /*decondstructing
    <div className="App">
      <Child coolObject={first} />
      <Child coolObject={second}/>

      */
      
   
  );
}

export default App;
