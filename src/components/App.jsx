import React from 'react';
import Movie from './Movie.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [
				{ title: 'The Social Network', image:'https://image.tmdb.org/t/p/w500//ok5Wh8385Kgblq9MSU4VGvazeMH.jpg' },
				{ title: 'White Chicks', image:'https://image.tmdb.org/t/p/w500//hT4PEPFW3dQG7N5LZe5b2qYHCU0.jpg' },
				{ title: 'The Wolf of Wall Street', image:'https://image.tmdb.org/t/p/w500//vK1o5rZGqxyovfIhZyMELhk03wO.jpg' },
				{ title: 'Iron Man', image:'https://image.tmdb.org/t/p/w500//jdXmMoREwmfZWxtqGyk5Zv0UB6r.jpg' }
			],
			searchresult: [],
			addedmovies: [],
			watchedlist: [],
			movieadded: false,
			searchtoggle: false,
			watched: false,
			watched_color: 'white',
			watched_fontcolor: 'black',
			unwatch_color: 'white',
			unwatch_fontcolor: 'black'
		};
		this.searchHandler = this.searchHandler.bind(this);
		this.addHandler = this.addHandler.bind(this);
		this.toggleHandler = this.toggleHandler.bind(this);
		this.watchedHandler = this.watchedHandler.bind(this);
		this.defaultHandler = this.defaultHandler.bind(this);
	}

	searchHandler(searchresult) {
		// if (searchresult.length === 0) {
		// 	this.setState({
		// 		searchtoggle: true,
		// 		searchresult: [{ title: 'No Movie Was Found!' }]
		// 	});
		// } else {
		// 	this.setState({ searchresult, searchtoggle: true, movieadded: false });
    // }
    this.setState({searchresult, searchtoggle:true, movieadded: false})
	}

	addHandler(addedmovies) {
		this.setState({ searchtoggle: false, movieadded: true, addedmovies });
	}

	watchedHandler(watchedmovie) {
		if (watchedmovie !== 'No Movie Was Found!') {
			var watchedlist = this.state.watchedlist;
			if (!watchedlist.includes(watchedmovie)) {
				watchedlist.push(watchedmovie);
				this.setState({ watchedlist });
			}
		}
	}

	defaultHandler(e){
		e.preventDefault();
		this.setState({	movieadded: false,
			searchtoggle: false,
			watched: false})
	}

	toggleHandler(e) {
    e.preventDefault();
    this.setState({ watched: !this.state.watched }, () => {
      if (this.state.watched === true) {
        this.setState({
          watched_color: 'lightgreen',
          watched_fontcolor: 'white'
        });
      } else {
        this.setState({
          watched_color: 'white',
          watched_fontcolor: 'black'
        });
      }
      // if (this.state.unwatched === true) {
      //   this.setState({
      //     unwatch_color: 'lightgreen',
      //     unwatch_fontcolor: 'white'
      //   });
      // } else {
      //   this.setState({
      //     unwatch_color: 'white',
      //     unwatch_fontcolor: 'black'
      //   });
      // }
    });
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
		if (this.state.watched === true) {
			list = this.state.watchedlist;
		}

		var movie = list.map(movie => (
			<Movie
				watchedHandler={this.watchedHandler}
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
				<input type="submit" onClick={this.defaultHandler} value="Fetch Your Movies"></input>
				<input
					style={{
						backgroundColor: this.state.watched_color,
						color: this.state.watched_fontcolor
					}}
					onClick={this.toggleHandler}
					className="watched_toggle"
					type="submit"
					value="Watched"
				/>
				{/* <input
					style={{
						backgroundColor: this.state.unwatch_color,
						color: this.state.unwatch_fontcolor
					}}
					onClick={this.toggleHandler}
					className="unwatched_toggle"
					type="submit"
					value="To-Watch"
				/> */}
				{movie}
			</div>
		);
	}
}

export default App;
