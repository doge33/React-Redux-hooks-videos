import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import youtube from '../APIs/youtube';
import useVideos from '../hooks/useVideos';


export default function App() {

  const [selectedVideo, setSelectedVideo] = useState(null);
  //destructure return values from custom hook, using a default term input
  const [videos, search] = useVideos('Twice');  //customize the default search term here, instead of inside the re-usable custom hook
  
  // ==> As a piece of state, selectedVideo is considered a derived property of videos
  useEffect(() => {
    setSelectedVideo(videos[0]); //after using custom hook: every time videos change, auto-select the first on the list 
  }, [videos])
  

  return (
    <div className="ui container">
        <SearchBar onFormSubmit={search}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList 
                videos={videos} 
                onVideoSelect={(video) => setSelectedVideo(video)}
              />
            </div>
          </div>
        </div>    
      </div>
  )
}

// Class components 
// export default class App extends React.Component {

//   state = {videos: [], selectedVideo: null}

//   //will do a default term search as soon as App loads so that the page doesn't have to be empty at first
//   componentDidMount() {
//     this.onTermSubmit('twice');
//   }

//   onTermSubmit = async (term) => {
//     //youtube is a pre-configured instance of axios
//     const response = await youtube.get('/search', {
//       params: {
//         q: term //the querying term is this.state.term in SearchBar
//       }
//     })
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0]
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({selectedVideo: video})
//   }

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit}/>
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo}/>
//             </div>
//             <div className="five wide column">
//               <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
//             </div>
//           </div>
//         </div>    
//       </div>
//     )
//   }
// }

