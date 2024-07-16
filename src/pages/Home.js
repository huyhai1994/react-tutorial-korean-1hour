import React from 'react';

/*TODO: 리액트에서 함수형 컴퍼넌트 안녕하세요!
        Với class component, element là đối tượng mà hàm render của thành phần đó trả về.
        Với function component, element là đối tượng mà hàm trả về.
*       Component – Làm việc với React là làm việc với các Component.
*       Bạn cần tư duy mọi thứ theo hướng component.
*        Component sẽ giúp bạn dễ dàng chỉnh sửa,
*        phát triển khi làm việc trên các dự án quy mô lớn.*/

/*TODO: One-way và Flux – React triển khai luồng dữ liệu một chiều giúp bạn dễ dàng suy luận về ứng dụng của mình. Flux là một mẫu giúp giữ dữ liệu của bạn theo một phương hướng duy nhất*/

function Home() {
    return (<h1>This is Home</h1>)
}

export default Home;

/*/!*TODO: Class component*!/
import React, {Component} from 'react';

class Home extends Component {
    // TODO: In this case you have to use the render()
    render() {
        return (<h1>This is Home</h1>)
    }
}*/

/*
export default Home;*/
