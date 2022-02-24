import React, { useState } from 'react';
import Profile from './Profile';

const ListComp = () => {
    const [users, setUsers] = useState([
        { name:'yunzzu', grade: 4 }, 
        { name:'jihyun', grade: 3 },
    ]);

    return (
        <div>
            {/* <Profile username={users[0].name}></Profile> */}
            {users.map((user) => {
                return <Profile username={user.name} grade={user.grade}></Profile>
                })}
        </div>
    )
}

export default ListComp;