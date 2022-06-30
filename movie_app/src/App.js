import React from "react";
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    // api 실행 분리
    getMovies = async () => { // 키워드 asyns 함수실행시 시간 소요(비동기) / await 실제 시간 필요 대상
        const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
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