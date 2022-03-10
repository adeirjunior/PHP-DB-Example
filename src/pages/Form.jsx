import React from 'react';
import { Form as Formy, Button } from 'react-bootstrap';

function Form() {

  return (
    <Formy method='post' action='http://localhost/test/api/addUser.php'>
        <Formy.Group className="mb-3">
            <Formy.Label>Name</Formy.Label>
            <Formy.Control 
            type="text" 
            name='name' 
            placeholder="Name" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Email address</Formy.Label>
            <Formy.Control 
            type="email" 
            name='email' 
            placeholder="Enter email" 
            />
            <Formy.Text className="text-muted">
            We'll never share your email with anyone else.
            </Formy.Text>
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Password</Formy.Label>
            <Formy.Control 
            type="password" 
            name='password' 
            placeholder="Password" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Country</Formy.Label>
            <Formy.Control 
            type="text" 
            name='country' 
            placeholder="Country" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>City</Formy.Label>
            <Formy.Control 
            type="text" 
            name='city' 
            placeholder="City" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Job</Formy.Label>
            <Formy.Control 
            type="text" 
            name='job' 
            placeholder="Job" 
            />
        </Formy.Group>
        <Button variant="primary" type="submit" name='submit'>
            Submit
        </Button>
    </Formy>
  )
}

export default Form;
