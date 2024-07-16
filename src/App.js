import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input1 from "./pages/Input1";
import List from "./pages/List";

function App() {
    /*TODO: App component -> index.html (div)에 넣어줌 */
    /*TODO:밑에는 jsx 문법임 -> html 아님...*/
    /*TODO: JSX – JSX là phần mở rộng cú pháp JavaScript.
        Không nhất thiết phải sử dụng JSX trong phát
         triển React, nhưng nó được khuyến khích.*/
    /*TODO: routing 처리함 리로드할 때마다 일부분만에 업데이트됨.*/
    return (<div className="App">
        {/*TODO: xml 가 html 모양이 완전하게 100%는 유사하지 않음*/}
        <nav>
            {/*TODO: 나중에 링크는 아에이 태크로 변경됨*/}
            {/*TODO: Home 크릭 할때는 Route 를 찾고 해당할 element
                    찾아냄*/}
            <Link to="/">Home </Link> |
            <Link to="/about">About </Link>|
            <Link to="/counter">Counter</Link>|
            <Link to="/input">Input</Link>|
            <Link to="/input1">Input1</Link>|
            <Link to="/list">List</Link>
            <Routes>
                {/*TODO:화면이 전환해줌*/}
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/input' element={<Input/>}/>
                <Route path='/input1' element={<Input1/>}/>
                <Route path='/list' element={<List/>}/>
            </Routes>
        </nav>
    </div>);
}

export default App;
