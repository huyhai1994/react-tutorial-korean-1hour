import React, {useState} from 'react'
/*TODO: useState -> 상태를 관리해주는 함수*/

const Counter = () => {
    const [num, setNumber] = useState(0);
    /*TODO:num 는 0 기본값으로 시작함 (변수)*/
    /*TODO: setNumber 는 앞에 정의한 num 변수에 대한 세트함수임*/
    const increase = () => {
        setNumber(num + 1);
    }

    const decrease = () => {
        setNumber(num - 1);
    }
    return (<div>
        <button onClick={increase}> +1
            {/*TODO: 주의 사항 - 리액트의 함수는 락타형 정리됨 */}
        </button>
        <button onClick={decrease}> -1
        </button>
        <p>{num}</p>
    </div>)
}
export default Counter;