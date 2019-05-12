import React from 'react';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			watched: false,
			unwatched: true
		};
	}
	render() {
		return (
			<div className='movie'>
				<ul>
					<li className="movie_title">{this.props.movie.title}</li>
          <input className="watched_button" type="submit" value="watched"></input>
				</ul>
			</div>
		);
	}
}

export default Movie;
