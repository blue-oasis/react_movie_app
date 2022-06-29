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
        console.log('render');
        return (
        <div>
            <h1>number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>);
    }
       
    constructor(props) {
        super(props); 
        console.log('hello');
    }
}

export default App;