import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*TODO: . Phương thức .createElement() là một phần của API React Cấp cao nhất và sử dụng nó để tạo các phần tử React*/
/*TODO: Không giống như những element DOM của trình duyệt, React element là những “đối tượng đơn giản” (plain object) và rất dễ để tạo ra. React DOM giữ vai trò cập nhật DOM để phù hợp với các React element.*/
/*TODO: ReactDOM -> index.html(public folder)
*       element 를 찻아서 root 번수에 저장해줌*/
root.render(
    /*TODO: jsx(xml 택크 쓸 수 있는 확장 js) 모양입*/
    /*TODO: 실제 html 아니고 jsx 임*/
    /*TODO: JSX = Javascript + XML*/
    /*TODO: JSX là một ngôn ngữ cho phép bạn kết hợp JavaScript và các thẻ giống HTML để xác định các phần tử giao diện người dùng (UI) và chức năng của chúng.
        JSX là một phần mở rộng cho JavaScript cho phép viết những gì trông giống như HTML và XML trong JavaScript
        JSX là cách viết tắt để gọi React.createElement () để tạo các phần tử và thành phần (Babel biên dịch JSX thành những câu gọi hàm React.createElement()).
        JSX trông giống như HTML và cung cấp một cú pháp thân thiện để tạo các phần tử DOM.
        JSX chấp nhận bất kỳ biểu thức JavaScript hợp lệ nào bên trong dấu ngoặc nhọn.*/
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*TODO: React 프포먼스 / 성능 측정하기 위해*/
