import './App.css';

function App() {
  return (
    <div className="App">
      <VariableDisplay/>
    </div>
  );
}

function VariableDisplay() {
  let stringVariable = "Randomiser chose tails";
  let numberVariable = 12;

  let arrayVariable = ["one", "two", "three", "four"];
  let objectVariable = {name: "John", age:42, job:"SysAdmin"};

  if (Math.random() > 0.5){
    stringVariable = "Randomiser chose Heads"
  };

  return(
    <><div>
      <p>String Variable: {stringVariable}</p>
      <p>Number Variable: {numberVariable}</p>

      <p>Array Variable: {arrayVariable}</p>
      <p>Object Variable Name: {objectVariable.name}</p>
      <p>Object Variable Age: {objectVariable.age}</p>
      <p>Object Variable Job: {objectVariable.job}</p>
      <ExtraJSX/>
      <ListComponent/>
    </div></>
  );
}

function ExtraJSX(){
  return(<><p>This is some more JSX</p></>);
}

let listItems = ["Apples", "Pears", "Bananas", "Oranges"];
function ListComponent(){
  const fruitList = listItems.map(item => <li>{item}</li>);
  return(<><ul>{fruitList}</ul></>);
}

export default App;
