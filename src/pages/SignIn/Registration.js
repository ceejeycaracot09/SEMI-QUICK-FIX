/* import React, { useState } from 'react';

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

export default App; */
 
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
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function SignUp() {
  const fields = [
    {label: 'Email', type: 'text', placeholder: 'Email'},
    {label: 'Username', type: 'text', placeholder: 'Username'},
    {label: 'Password', type: 'password', placeholder: 'Password'}
  ];

  const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signin-container">
      <Form>
        {fields.map((field, index) => {
          return (
            <Form.Group className="ab-3" controlId={`signUpForm${index}`} key={index}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control 
                type={field.type} 
                placeholder={field.placeholder}
                onChange={(e) => {
                  if (field.label === 'Email') {
                    setEmailAddress(e.target.value);
                  } else if (field.label === 'Username') {
                    setUsername(e.target.value);
                  } else if (field.label === 'Password') {
                    setPassword(e.target.value);
                  }
                }}
              />
            </Form.Group>
          );
        })}
        <button type="submit">Sign In</button>
        <br />
        <h2> Hi {emailAddress}</h2>
        <h2> Your username is {username}</h2>
        <h2> Your password is {password}</h2>
      </Form>
    </div>
  );
}

export default SignUp;