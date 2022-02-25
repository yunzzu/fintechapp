import React, { useState } from 'react';
import Profile from './Profile';
import styled from 'styled-components';

const ListBlock = styled.div`
    margin: 20px;
    text-align: center;
`;

const ListComp = () => {
    const [users, setUsers] = useState([
        { name:'yunzzu', grade: 4 }, 
        { name:'jihyun', grade: 3 },
    ]);

    return (
        <div>
            {/* <Profile username={users[0].name}></Profile> */}
            {users.map((user) => {
                return <ListBlock><Profile username={user.name} grade={user.grade}></Profile></ListBlock>
                })}
        </div>
    )
}

export default ListComp;