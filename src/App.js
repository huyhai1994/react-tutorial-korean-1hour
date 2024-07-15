import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input1 from "./pages/Input1";


function App() {
    /*TODO: App component -> index.html (div)에 넣어줌 */
    /*TODO:밑에는 jsx 문법임 -> html 아님...*/
    /*TODO: routing 처리함 리로드할 때마다 일부분만에 업데이트됨.*/
    return (<div className="App">
        {/*TODO: xml 가 html 모양이 완전하게 100%는 유사하지 않음*/}
        <nav>
            {/*TODO: 나중에 링크는 아에이 태크로 변경됨*/}
            <Link to="/">Home </Link> |
            {/*TODO: Home 크릭 할때는 Route 를 찾고 해당할 element
                    찾아냄*/}
            <Link to="/about">About </Link>|
            <Link to="/counter">Counter</Link>
            <Link to="/input">Input</Link>
            <Link to="/input1">Input1</Link>
            <Routes>
                {/*TODO:화면이 전환해줌*/}
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/input' element={<Input/>}/>
                <Route path='/input1' element={<Input1/>}/>
            </Routes>
        </nav>
    </div>);
}

export default App;
