import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*TODO: ReactDOM -> index.html(public folder)
*       element 를 찻아서 root 번수에 저장해줌*/
root.render(
    /*TODO: jsx(xml 택크 쓸 수 있는 확장 js) 모양입*/
    /*TODO: 실제 html 아니고 jsx 임*/
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*TODO: React 프포먼스 / 성능 측정하기 위해*/
