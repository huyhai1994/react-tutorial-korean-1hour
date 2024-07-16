import React, {useState} from 'react'
/*TODO:사용자 입력 처리*/
const Input = () => {
    const [txtValue, setTxtValue] = useState('');
    const onChange = (e) => {
        /*TODO: event 를 변경할 때마다 이벤트를 갖고 올 건데*/
        setTxtValue(e.target.value)
        /*TODO: 계속 값을 넣어 줌*/

    }
    return <div>
        {/*TODO: Sau khi biên dịch, biểu thức JSX trở thành các đối tượng JavaScript thông thường. Điều này có nghĩa là bạn có thể sử dụng JSX bên trong các câu lệnh if và cho các vòng lặp, gán nó cho các biến, chấp nhận nó như các đối số, và trả về nó từ các hàm.*/}
        <input type="text" value={txtValue} onChange={onChange}/>
        <br/>
        <p>{txtValue}</p>
    </div>
}
export default Input;
