import React from 'react';
import Movie from './Movie.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [
				{ title: 'Mean Girls' },
				{ title: 'Hackers' },
				{ title: 'The Grey' },
				{ title: 'Sunshine' },
				{ title: 'Ex Machina' }
			],
			searchresult: [],
			addedmovies: [],
			movieadded: false,
			searchtoggle: false
		};
		this.searchHandler = this.searchHandler.bind(this);
		this.addHandler = this.addHandler.bind(this);
	}

	searchHandler(searchresult) {
		console.log('this is reuslt', searchresult);
		if (searchresult.length === 0) {
			this.setState({
				searchtoggle: true,
				searchresult: [{ title: 'No Movie Was Found!' }]
			});
		} else {
			this.setState({ searchresult, searchtoggle: true, movieadded: false });
		}
	}

	addHandler(addedmovies) {
		this.setState({ searchtoggle: false, movieadded: true, addedmovies });
	}

	render() {
		var list;
		if (this.state.movieadded === true) {
			list = this.state.addedmovies;
		} else if (this.state.searchtoggle === true) {
			list = this.state.searchresult;
		} else {
			list = this.state.movies;
		}

		var movie = list.map(movie => (
			<Movie
				searchHandler={this.searchHandler}
				key={this.state.movies.indexOf(movie) * Math.random()}
				movie={movie}
			/>
		));
		return (
			<div className="table">
				<h3>Movie List</h3>
				<Add addHandler={this.addHandler} />
				<Search movies={list} searchHandler={this.searchHandler} />
				{movie}
			</div>
		);
	}
}

export default App;
