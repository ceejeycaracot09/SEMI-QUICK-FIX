import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting Sign Up Form', { email, password });
    // Do your sign up logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting Sign In Form', { email, password });
    // Do your sign in logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

const App = () => {
  return (
    <>
      <SignUpForm />
      <SignInForm />
    </>
  );
};

export default App;
 
/* import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const fields = [
    {label: 'Email Address', type: 'text', placeholder: 'Input Email'},
    {label: 'Password', type: 'text', placeholder: 'Password'}
  ]

  const [emailAddress, setEmailAddress] = useState('Ceejey');

  return {
    <Form>
    {fields.map[(field) => {
      return{
        <Form.Group className="mh-3" controlId="formBasicEmail">
          <Form.Label>[field.label]</Form.Label>
          <Form.Control type=[field.type] placeholder=[field.placeholder]
      }
    }]}
  }
} */