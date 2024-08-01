import Fruits from './components/Fruits';
import Hello from './components/Hello';
import fruit_obj from './components/obj';
import Array_obj from './components/Array_obj';
import Consdition_render from './components/consdition_render';
import Fruite from './components/Fruite';
import Filter_fruits from './components/Filter_fruits';
import Message from './components/Message';
import Counter from './components/Counter';
import Form from './components/Form';
import MultiInputForm from './components/MultiInputForm';


function App() {
  const obj = {
    name: 'snaket',
    message: 'my name is '
  };
  let fruits = ["Apple", "Banana", "Orange","Mango"];


  return (
    <div className="App">
      <MultiInputForm/>
    </div>
  )
}

export default App
