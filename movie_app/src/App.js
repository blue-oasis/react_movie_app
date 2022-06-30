import React from "react";
import axios from 'axios';
import Movie from "./Movie";
import './App.css';

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
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false }); // axios get : state 이름 같아서 축약
    }

    componentDidMount(){ //영화 데이터 로딩
        this.getMovies();
    }

    render() { //문법이 바꼈나 className 해야 정상동작
        const { isLoading, movies } = this.state;
        return ( 
            <section className="container"> 
            {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div> 
                ) : (
                <div className="movies">    
                   { movies.map(movie => ( 
                    <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    />
                ))}; //컴포넌트 출력
            </div>
        )}
        </section>
        );
    }
}

export default App;