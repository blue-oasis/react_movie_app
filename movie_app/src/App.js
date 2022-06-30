import React from "react";
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    // api 실행 분리
    getMovies = async () => { // 키워드 asyns 함수실행시 시간 소요(비동기) / await 실제 시간 필요 대상
        const { //구조 분해 할당으로 키에 접근
            data:{
                data:{ movies },
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        this.setState({ movies, isLoading: false }); // axios get : state 이름 같아서 축약
    }

    componentDidMount(){ //영화 데이터 로딩
        this.getMovies();
    }

    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;;
    }
}

export default App;