import React from "react";

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

            <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
            <div className="movie__data">
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <p className="movie__summary">{location.state.summary}</p>
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