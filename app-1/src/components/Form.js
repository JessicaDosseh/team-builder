import React, { useState } from 'react'; 

const Form = ({addNewMember}) => {

  const [memberInfo, setMemberInfo] = useState([
    {
      name: '',
      role: '',
      email: ''
    }
  ]);

  const handleChanges = event => {
    setMemberInfo({...memberInfo, [event.target.name]: event.target.value}); 
  }; 

  const submitForm = event => {
    event.preventDefault();
    addNewMember(memberInfo); 
    setMemberInfo({name: '', role: '', email: ''}); 
  }; 

  return (
    <form onSubmit={submitForm}>
      <label htmlFor='name'>Name --- </label>
      <input
        id='name'
        type='text'
        name='name'
        placeholder='Enter Name'
        onChange={handleChanges}
        value={memberInfo.name}
      />
      <br/>
      <br/>

      <label htmlFor='role'>Role --- </label>
      <input
        id='role'
        type='text'
        name='role'
        placeholder='Enter Role'
        onChange={handleChanges}
        value={memberInfo.role}
      />
      <br/>
      <br/>

      <label htmlFor='email'>Email ---</label>
      <input
        id='email'
        type='text'
        name='email'
        placeholder='Enter Email'
        onChange={handleChanges}
        value={memberInfo.email}
      />
      <br/>
      <br/>

      <button type='submit'>Join Team!</button>
    </form>
  );
};

export default Form;