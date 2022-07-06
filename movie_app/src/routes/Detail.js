import React from "react";
import './Detail.css'; 

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) { //리다이랙팅 데이터없으면 home으로 이동
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state) {
            console.log(this.props);
            return(
                 
            <div>

            <img className="img_d" src={location.state.poster} alt={location.state.title} title={location.state.title} />
            <div className="data">
            <h3 className="title">{location.state.title}</h3>
            <h5 className="year">{location.state.year}</h5>
            <h5 className="g">
            {location.state.genres.map((genre, index) => {
                return <li key={index} className="movie__genre">  &nbsp; {genre} </li>
            })}
            </h5>
            <p className="summary">{location.state.summary}</p>
            </div>

            </div>

            );
        }
        else {
            return null;
        }
    }
}


export default Detail;