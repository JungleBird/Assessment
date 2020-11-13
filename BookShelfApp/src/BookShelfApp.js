import React, { Component } from 'react';
import BookCard from './components/bookCard';
import {BookShelfContainer, BookShelfWrapper, SubText} from './styles/bookShelfStyles'

class BookShelfApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
      savedResults: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }


  handleSubmit(event) {
    fetch('https://openlibrary.org/search.json?q='+this.state.value)
    .then(response => response.json())
    .then(data => {
      this.setState({results: data.docs})
      console.log(data);
    });

    event.preventDefault();
  }

  displaySearchField = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        
        </label>
        <input type="submit" value="Submit" />
      </form>
    )};

  displaySearchResults = () => {

    return (
        <BookShelfWrapper>
            {this.state.results && this.state.results.slice(0,7).map((book, index) => (
                <div>
                    <BookCard 
                        key={'searched' + index} 
                        {...book}
                    />
                    {this.state.savedResults.includes(book) 
                    ? <SubText>Already Saved</SubText>
                    : <button 
                        key={'searchedButton' + index}
                        onClick={()=>{
                            this.setState({
                            savedResults: [...this.state.savedResults, book]
                        })}}
                    >
                        Add
                    </button>}
                </div>
            ))}
      </BookShelfWrapper>
    );
  }

  displaySavedResults = () => {
    return (
        <BookShelfWrapper>
          {this.state.results && this.state.savedResults.map((savedBook, index) => (
              <div>
                <BookCard 
                    key={'savedBook' + index} 
                    {...savedBook} 
                />
                <button 
                    key={'savedButton' + index} 
                    onClick={()=>{this.setState({
                        savedResults: this.state.savedResults.filter(function(removeBook) {
                        return savedBook !== removeBook
                        })
                    })}}
                >
                    Remove
                </button>
            </div>
        ))}
        </BookShelfWrapper>
    )}

  render() {
    return (
      <BookShelfContainer>      
          {this.displaySearchField()}
          {this.displaySearchResults()}
          {this.displaySavedResults()}
      </BookShelfContainer>

    );
  }
}

export default BookShelfApp;
