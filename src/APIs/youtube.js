import axios from 'axios';

const KEY = 'AIzaSyDSRWIeH9--VHK6diQv3VM9QisdI7JCzMA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }

})