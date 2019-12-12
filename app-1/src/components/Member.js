import React from 'react'; 

const Member = props => {
  return (
    <div className='member'>
      {props.memberInfos.map(memberInfo => (
        <div className="box" key={memberInfo.id}>
        <h2>{memberInfo.name}</h2>
        <p>{memberInfo.role}</p>
        <p>{memberInfo.email}</p>
      </div>
      ))}
    </div>
  );
};

export default Member;