import React from 'react'

export default class SearchBar extends React.Component {

  state = {term: ''};

  onFormSubmit = evt => {
    evt.preventDefault();
    
    this.props.onFormSubmit(this.state.term);
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
