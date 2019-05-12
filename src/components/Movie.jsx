import React from 'react';

class Movie extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul>
				<li className="movie_title">{this.props.movie.title}</li>
			</ul>
		);
	}
}

export default Movie;
