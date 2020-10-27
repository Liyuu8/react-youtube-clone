import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const fetchPopularData = async () => {
  // https://developers.google.com/youtube/v3/docs/videos/list
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResult: 40,
      key: process.env.REACT_APP_API_KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular',
    },
  });
};
