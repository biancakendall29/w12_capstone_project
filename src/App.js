import './App.css';
const {createDeck} = require('./utils/createDeck.js')

function App() {
  return (
    <div>
      <h1>{JSON.stringify(createDeck())}</h1>
    </div>
  );
}

export default App;
