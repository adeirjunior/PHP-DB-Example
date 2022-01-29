import React, { useState } from 'react';
import { Form as Formy, Button } from 'react-bootstrap';
import axios from 'axios';

function Form() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        city: '',
        job: '',
        formSend: false
    })

    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        try{
            await axios({
                method: 'post',
                url: 'http://localhost/test/api/addUser.php',
                data: data,
                config: { 
                    headers: {
                        'Content-Type': 'application/json;'
                    }
                }
            })
            .then((res) => {
                console.log(JSON.stringify(res.data))

            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            });
        } catch(e) {
            console.log(e.message)
        }
    }
  return (
    <Formy id='upload'>
        <Formy.Group className="mb-3">
            <Formy.Label>Name</Formy.Label>
            <Formy.Control 
            type="text" 
            name='name' 
            value={data.name} 
            onChange={
                e => { 
                    setData(
                        prevData => {
                            return {
                                ...prevData,
                                name: e.target.value
                            }
                        }
                    )
                }
            } 
            placeholder="Name" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Email address</Formy.Label>
            <Formy.Control 
            type="email" 
            name='email' 
            value={data.email} 
            onChange={
                e => { 
                    setData(
                        prevData => { 
                            return {
                                ...prevData, 
                                email: e.target.value
                            }
                        }
                    )
                }
            } 
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
            value={data.password} 
            onChange={
                e => { 
                    setData(
                        prevData => { 
                            return {
                                ...prevData, 
                                password: e.target.value
                            }
                        }
                    )
                }
            } 
            placeholder="Password" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Country</Formy.Label>
            <Formy.Control 
            type="text" 
            name='country' 
            value={data.country} 
            onChange={
                e => { 
                    setData(
                        prevData => { 
                            return {
                                ...prevData, 
                                country: e.target.value
                            }
                        }
                    )
                }
            } 
            placeholder="Country" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>City</Formy.Label>
            <Formy.Control 
            type="text" 
            name='city' 
            value={data.city} 
            onChange={
                e => { 
                    setData(
                        prevData => { 
                            return {
                                ...prevData, 
                                city: e.target.value
                            }
                        }
                    )
                }
            } 
            placeholder="City" 
            />
        </Formy.Group>
        <Formy.Group className="mb-3">
            <Formy.Label>Job</Formy.Label>
            <Formy.Control 
            type="text" 
            name='job' 
            value={data.job} 
            onChange={
                e => { 
                    setData(
                        prevData => { 
                            return {
                                ...prevData, 
                                job: e.target.value
                            }
                        }
                    )
                }
            } 
            placeholder="Job" 
            />
        </Formy.Group>
        <Button 
        variant="primary" 
        type="submit" 
        name='submit' 
        onClick={
            (e) => {
                onsubmit(e); 
                setData(
                    prevData => {
                        return {
                            ...prevData,
                            formSend: true
                        }
                    }
                )
            }
        }>
            Submit
        </Button>
    </Formy>
  )
}

export default Form;
