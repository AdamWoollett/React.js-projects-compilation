import './App.css';
import './JobBoard.js';
import JobBoard from './JobBoard.js';
import StyledButton from './StyledButton.js';
import JobCounter from './JobCounter.js';
import AdvancedJobCounter from './AdvancedJobCounter.js';
import DynamicForm from './DynamicForm.js';
import BotListManager from './BotListManager.js';
import DynamicBotManager from './DynamicBotManager.js'

function App() {
  return (
    <div className="App">
      <JobBoard/>
      <StyledButton/>
      <JobCounter/>
      <AdvancedJobCounter/>
      <DynamicForm/>
      <BotListManager/>
      <DynamicBotManager/>
    </div>
  );
}

export default App;
