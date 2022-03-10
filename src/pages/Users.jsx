import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardGroup, ListGroup } from 'react-bootstrap'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        try{
        getUsers()
        } catch(e){
            console.log(e.message)
        }
    }, []);
    const getUsers = () => {
        const url = 'http://localhost/test/api/users.php';
        try{
            axios.get(url).then(res => res.data)
            .then((data) => {
                setUsers(data)
            })
            .catch((e)=>{
                console.log(e.message)
            })
        } catch(e){
            console.log(JSON.stringify(e))
        }
    }

  return (
    <CardGroup className='d-block'>
        {
            users.map((user, key) => (
                <Card className='mb-5' key={key}>
                    <Card.Body>
                        <Card.Title>
                            { user.name }
                        </Card.Title>
                        <ListGroup>
                            <ListGroup.Item>{ user.email } </ListGroup.Item>
                            <ListGroup.Item>{ user.country } </ListGroup.Item>
                            <ListGroup.Item>{ user.city } </ListGroup.Item>
                            <ListGroup.Item>{ user.job } </ListGroup.Item>
                        </ListGroup>
                        
                    </Card.Body>
                </Card>
            ))
        }
    </CardGroup>
  )
}

export default Users;
