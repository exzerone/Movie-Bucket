import React from 'react';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.watchedHandler = this.watchedHandler.bind(this);
	}

	watchedHandler(e) {
		e.preventDefault();
		console.log(this.props.movie);
		this.props.watchedHandler(this.props.movie);
	}

	render() {
		return (
			<div className="movie">
				<ul>
					<li className="movie_title">{this.props.movie.title}</li>
					<input
						onClick={this.watchedHandler}
						className="watched_button"
						type="submit"
						value="watched"
					/>
				</ul>
				<div>
					<img className="movie_poster" style={{ width: 175, height: 250 }} src={this.props.movie.image} />
				</div>
			</div>
		);
	}
}

export default Movie;
