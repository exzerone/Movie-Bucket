import React from 'react';
import key from '../../config.js';
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      query: '',
      result: []
    };
    this.queryHandler = this.queryHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
	}

	queryHandler(e) {
    e.preventDefault();
    this.setState({query:e.target.value})
	}

	clickHandler(e) {
    e.preventDefault();
    // var array = this.state.result;
    // for (let movie of this.props.movies){
    //   if (movie['title'].toLocaleLowerCase().indexOf(this.state.query.toLocaleLowerCase()) !== -1){
    //     array.push(movie);
    //   } else {
    //     this.props.searchHandler([])
    //   }
    // }
    var array = [];
    $.get({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${key.api}&query=${this.state.query}`,
      data: String,
      success: (data)=>{
        data.results.forEach((result)=>{
          
            var poster = result['poster_path'];
            var obj = {
              title: result.title,
              image: `https://image.tmdb.org/t/p/w500/${poster}`
            }
          if (obj.image !== null || obj.title !== null){
            array.push(obj)
            this.props.searchHandler(array.slice(0, 9))
          }
        })
      }
    })

    // console.log(this.state.result);
		// this.props.searchHandler(array);
	}

	render() {
		return (
			<div>
				<input
					onChange={this.queryHandler}
					type="text"
          className="search_bar"
          placeholder="Search Movie..."
				/>
				<input
					onClick={this.clickHandler}
					type="submit"
					className="searchbutton"
					value="Go!"
				/>
			</div>
		);
	}
}

export default Search;


      // $.get({
          //   url: `https://api.themoviedb.org/3/movie/${result.id}/images?api_key=${key.api}`,
          //   success:(movie)=>{
          //     console.log(movie);
          //   }
          // })
          // var obj = {
          //   image = `https://image.tmdb.org/t/p/w500/${result['poster_path']}`;
          //   title = result.title;

          // }
          // $.get({
          //   url:`https://image.tmdb.org/t/p/w500/${result['poster_path']}`,
          //   success: (poster)=>{
          //     console.log(poster)
          //   }
          // })