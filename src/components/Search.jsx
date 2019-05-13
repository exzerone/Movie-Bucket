import React from 'react';
import Axios from 'axios';


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
    Axios.post('/movies',{
      search: this.state.query
    })
    .then((result)=>{
      this.props.searchHandler(result.data);
    })
    .catch((err)=>{
      console.log(err)
    });
	}

	render() {
		return (
			<form onSubmit={this.clickHandler}>
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
			</form>
		);
	}
}

export default Search;
