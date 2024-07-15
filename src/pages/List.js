import React from 'react'
/*TODO: 서버에서 데이터를 가져 와서
*       나타내주는 함수   */
const User = ({userData}) => {
    return (<tr>
        <td>{userData.name}</td>
        <td>{userData.email}</td>
    </tr>)
}
const UserList = () => {
    const users = [{
        email: 'user1@example.com', name: 'User 1'
    }, {
        email: 'user2@example.com', name: 'User 2'
    }, {
        email: 'user3@example.com', name: 'User 3'
    }, {
        email: 'user4@example.com', name: 'User 4'
    }, {
        email: 'user5@example.com', name: 'User 5'
    }, {
        email: 'user6@example.com', name: 'User 6'
    }

    ];
    return (<table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => <User userData={user}/>)}
        </tbody>
    </table>);
}
export default UserList;