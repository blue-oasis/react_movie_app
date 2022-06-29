import React from "react";

class App extends React.Component {
    // state 객체
    state = {
        count: 0,
    };
    // state 변경 시 setState 사용
    // 현재 state를 current 인자로 받아서 변경
    add = () => {
        this.setState(current => 
            ({ count: this.state.count + 1})
            );
    };

    minus = () => { 
        this.setState(current => (
            { count: this.state.count - 1 }
            )
         );
    };
    
    // jsx 반환용 render
    render() {
        // render실행순서 2
        console.log('I am rendering');
        return (
        <div>
            <h1>number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>);
    }
      //실행순서 1 
    constructor(props) {
        super(props); 
        console.log('hello');
    }
    // 실행순서 3
    componentDidMount() {
        console.log('component rendered');
    }
    // 화연 업뎃시 실행
    componentDidUpdate() {
        console.log('I just updated');
    }
    // 컴포넌트가 화면에서 소멸시
    componentWillUnmount() {
        console.log('Goodbey!')
    }
}

export default App;