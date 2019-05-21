import React, { Component,addons } from 'react';
import './Home.css';
import Chips from "./Chips";



export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestionsList: [
        {name: 'sharanu', email: 'steven@gmail.com',photo:'photo1.jpg'}, 
        {name: 'rama', email: 'rama@gmail.com',photo:'photo2.jpg'}, 
        {name: 'laxman', email: 'laxam@gmail.com',photo:'photo3.jpg'},
        {name: 'Abhi', email: 'Abhi@gmail.com',photo:'photo4.jpg'},
        {name: 'Arjun', email: 'Arjun@gmail.com',photo:'photo5.jpg'},
        {name: 'Dronacharya', email: 'Dronacharya@gmail.com',photo:'photo1.jpg'},
        ],
      suggestions: [],
      chipSelectedToRemove: false,
      chips: []
    };
  }

  matchInputToList = (input) => {
    let { suggestionsList } = this.state;
    const reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    return suggestionsList.filter(function(person) {
      if (person.name.match(reg)) {
        return person;
      }
    });
  }

  onKeyDown(event) {
    let keyPressed = event.which;

    if (keyPressed === this.state.KEY.enter ||
        (keyPressed === this.state.KEY.tab && event.target.value)) {
      event.preventDefault();
      this.updateChips(event);
    } else if (keyPressed === this.state.KEY.backspace) {
      let chips = this.state.chips;

      if (!event.target.value && chips.length) {
        this.deleteChip(chips[chips.length - 1]);
      }
    }
  }

  handleInputChange = (event) => {
    if(event.target.value) {
      const suggestions = this.matchInputToList(event.target.value);
      this.setState({ suggestions: suggestions});
    }
  }

  addSuggestionToChips = (value) => {
    let { suggestionsList, suggestions, chips } = this.state;

    let filteredSuggestionsList = Object.assign({}, filteredSuggestionsList);
    filteredSuggestionsList = suggestionsList.filter((item) => item.name !== value.name);

    this.setState({ 
      chips: chips.concat(value),
      suggestions: [],
      suggestionsList: filteredSuggestionsList

    });
  }

  removeChip = (chip) => {
    let { suggestionsList, suggestions, chips } = this.state;

    let filteredChips = Object.assign({}, chips);
    filteredChips = chips.filter((item) => item.name !== chip.name);

    this.setState({ 
      chips: filteredChips, 
      suggestions: [],
      suggestionsList: suggestionsList.concat(chip),

    });
  }
  

  handleInputClick = (event) => {
    let { suggestionsList, suggestions } = this.state;
    this.setState({ suggestions:  suggestionsList})
  } 

  render() {
    const { chips, suggestions, suggestionsList, inputValue } = this.state;
    return (
        <div className="parentContainer">
          {
            chips.length > 0 && (
              <ul className="chipsList" id="chipsList">
                {
                  chips.map((chip, key) => {
                    return(
                      <li key={key} className="chipBox">
                      <img src={chip.photo} alt="defaultPhoto" style={{width:"30px", height:"30px", radius:"10px"}}/>&nbsp;&nbsp;
                          <span>{chip.name}</span>
                          <span className="deleteIcon" onClick={() => this.removeChip(chip)}>X</span>
                      </li>)
                  })
                }
              </ul>
            )
          }
          <div className="autoComplete">
            <input 
              type="text"
              placeholder="Search Name"
              className="autoCompleteInput"
              defaultValue={inputValue}
              onChange={this.handleInputChange}
               onClick={this.handleInputClick}
              onKeyDown={this.keyDown}
            />
              {
                suggestions.length > 0 && (
                  <ul className="suggestionsList">
                    {
                      suggestions.map((suggestion, key) => {
                        return(
                        <li key={key} className="suggestion" onClick={() => {this.addSuggestionToChips(suggestion)}}>
                        <div className="listItemRow" >
                        <img src={suggestion.photo} alt="defaultPhoto" style={{width:"20px", height:"20px"}}/> &nbsp; &nbsp;
                        <p>{suggestion.name}</p>
                        </div>
                        </li>)
                      })
                    }
                  </ul>
                )
              }
          </div>
          <div>
          
          </div>
        </div>
    );
  }

}


export default Home;