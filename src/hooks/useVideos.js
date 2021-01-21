//making a custom hook:
//import the primitive hooks
import {useState, useEffect} from 'react';
import youtube from '../APIs/youtube';

//input: default term     output: list of videos as a result 
export default function useVideos(defaultSearchTerm) {

  const [videos, setVideos] = useState([]);

  //search using default term at first
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // output: a way to update videos after search 
  const search = async (term) => {
    
    const response = await youtube.get('/search', {
      params: {
        q: term 
      }
    });
    setVideos(response.data.items);
   
  }

  return [ videos, search ]; //you can return { videos, onTermSubmit } too following JS conventions
}
