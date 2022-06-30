import './App.css';
import { useState } from 'react';

function App() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Address, setAddress] = useState('');
  const [Postal, setPostal] = useState('');
  const [Phone, setPhone] = useState('');

  return (
    <div className="App">
      <div className="information">
        <label>FirstName:</label>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />

        <label>LastName:</label>
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />

        <label>Address:</label>
        <input
          type="text"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />

        <label>Postal:</label>
        <input
          type="text"
          onChange={(event) => {
            setPostal(event.target.value);
          }}
        />

        <label>Phone:</label>
        <input
          type="text"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />

        <button>Add</button>
      </div>
    </div>
  );
}
export default App;
