import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [textBody, setTextBody] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      fullName,
      subject,
      textBody,
    };

    fetch('http://www.example.com', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === 'name') {
      setFullName(value);
    }
    if (event.target.name === 'subject') {
      setSubject(value);
    }
    if (event.target.name === 'textBody') {
      setTextBody(value);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          name="name"
          value={fullName}
          placeholder="Your full name"
          onChange={onTextInputChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Subject"
          onChange={onTextInputChange}
        />
        <label htmlFor="textBody">Body</label>
        <input
          name="textBody"
          value={textBody}
          placeholder="Your text here"
          onChange={onTextInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;