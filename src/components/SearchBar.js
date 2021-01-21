import React, {useState} from 'react';

export default function SearchBar(props) {

  const [term, setTerm] = useState('');

  const onFormSubmit = evt => {
    evt.preventDefault(); 
    props.onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input 
            type="text"
            value={term}
            onChange={(evt) => setTerm(evt.target.value)}
            />
          </div>
        </form>
      </div>
  )
}

//Class Component
// export default class SearchBar extends React.Component {

//   state = {term: ''};

//   onFormSubmit = evt => {
//     evt.preventDefault();
    
//     this.props.onFormSubmit(this.state.term);
//   }

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input 
//             type="text"
//             value={this.state.term}
//             onChange={(evt) => this.setState({term: evt.target.value})}
//             />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
