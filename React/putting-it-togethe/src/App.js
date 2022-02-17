
import './App.css';
import Child from './components/Child'

function App() {

const coolClub = [
      {
          firstName: "Jane",
          lastName: "Doe",
          age: 45,
          hairColor: "Black",
          
      },
      {
        firstName: "John",
        lastName: "Smith",
        age: 99,
        hairColor: "Brown",
        
      },
  ];
  return(
  
      <div className="App">
          {coolClub.map((member, index)=>{
            return (
              <Child
                key={index}
                firstName={member.firstName}
                lastName={member.lastName}
                age={member.age}
                hairColor={member.hairColor}
              />
            );

        
         })}

       
    </div>
  )
 
}

export default App;










  

   
 

