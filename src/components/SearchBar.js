import React from 'react'

export default class SearchBar extends React.Component {

  state = {term: ''};

  onFormSubmit = evt => {
    evt.preventDefault();
    //todo: make sure we call callback grom parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input 
            type="text"
            value={this.state.term}
            onChange={(evt) => this.setState({term: evt.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}
