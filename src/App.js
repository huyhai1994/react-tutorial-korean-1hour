import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
    /*TODO: App component -> index.html (div)에 넣어줌 */
    /*TODO:밑에는 jsx 문법임 -> html 아님...*/
    /*TODO: routing 처리함 리로드할 때마다 일부분만에 업데이트됨.*/
    return (<div className="App">
        {/*TODO: xml 가 html 모양이 완전하게 100%는 유사하지 않음*/}
        <Home/>
    </div>);
}

export default App;
