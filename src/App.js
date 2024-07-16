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
    /*TODO: Kết luận: Ta có thể hiểu JSX là cách viết tắt để gọi React.createElement () để tạo các phần tử và thành phần. React.createElement () là cách viết cũ . Vì vậy, React đã giới thiệu cách viết mã JSX giúp mã dễ viết và dễ hiểu. JSX trông giống như HTML và cung cấp một cú pháp thân thiện để tạo các phần tử DOM.*/
    /*TODO: App component -> index.html (div)에 넣어줌 */
    /*TODO:밑에는 jsx 문법임 -> html 아님...*/
    /*TODO: JSX – JSX là phần mở rộng cú pháp JavaScript.
        Không nhất thiết phải sử dụng JSX trong phát
         triển React, nhưng nó được khuyến khích.
         Việc sử dụng JSX trong ReactJS là không bắt buộc. Bạn có thể sử dụng chỉ JS thuần. Nhưng có rất nhiều lý do cho việc nên sử dụng JSX trong ReactJS
        Thứ nhất, JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
            Thứ 2, JSX không làm thay đổi ngữ nghĩa của Javascript
            Thứ 3, với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn.

*/
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
            {/*TODO: Cú pháp của XML được xây dựng dựa vào cấu trúc NODE lồng nhau, mỗi node sẽ có một thẻ mở và một thẻ đóng như sau :
                <nodename>nội dung</nodename>
                <nodename> là thẻ mở, tên của thẻ này do bạn tự định nghĩa.
                </nodename> là thẻ đóng, tên của thẻ này phải trùng với tên của thẻ mở.
                content là nội dung của thẻ này
*/}
        </nav>
    </div>);
}

export default App;
