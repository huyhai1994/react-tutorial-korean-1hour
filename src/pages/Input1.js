/*TODO: input 방이 여러게 있는 경우 처리 코드 */
import React, {useState} from 'react'
/*TODO:사용자 입력 처리*/

const Input1 = () => {
    const [inputs, setInputs] = useState({
        name: '', email: '', telephone: '',
    })
    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            /*TODO: ... -> 새로운 object를 복사해옴 , 각각 sprite 해당됨*/
            ...inputs, [id]: value
        });
    }
    const {name, email, tel} = inputs;
    /*TODO:
        inputs: This is the object from which we want to extract the properties.
        {name, email, tel}: This is the destructuring assignment syntax. It means we're creating new variables (name, email, and tel) and assigning them the corresponding values from the inputs object.*/
    return (<div>
        <div>
            <label>name: </label>
            <input type="text" id='name' value={name} onChange={onChange}/>
        </div>
        <div>
            <label>Email: </label>
            <input type="email" id='email' value={email} onChange={onChange}/>
        </div>
        <div>
            <label>Telephone: </label>
            <input type="tel" value={tel} id='tel' onChange={onChange}/>
        </div>
        <p>Name: {name}</p>
        <p> Email: {email}</p>
        <p>Telephone: {tel}</p>
    </div>);
}

export default Input1;
