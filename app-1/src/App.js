import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'; 
import Member from './components/Member'; 

function App() {

  const [memberInfos, setMemberInfos] = useState([
    {
      id: 0,
      name: 'Team Member Name',
      role: 'Role',
      email: 'email@email.com'
    }
  ]);

  const addNewMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      role: person.role,
      email: person.email
    }

    const newMemberCollection = [...memberInfos, newMember];
    setMemberInfos(newMemberCollection); 

  };

  return (
    <div className="App">
      <h1>JOIN THE TEAM!</h1>
      <Form className='form' addNewMember={addNewMember} />
      <Member memberInfos={memberInfos} />
    </div>
  );
}

export default App;
