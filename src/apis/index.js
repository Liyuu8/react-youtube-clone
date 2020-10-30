import axios from 'axios';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

const commonParams = {
  part: 'snippet',
  maxResult: 40,
  key: process.env.REACT_APP_API_KEY,
  regionCode: 'JP',
  type: 'video',
};

export const fetchPopularData = async () => {
  // https://developers.google.com/youtube/v3/docs/videos/list
  return await youtube.get('/videos', {
    params: {
      ...commonParams,
      chart: 'mostPopular',
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get('/videos', {
    params: {
      ...commonParams,
      id,
    },
  });
};

export const fetchReletedData = async (id) => {
  return await youtube.get('/search', {
    params: {
      ...commonParams,
      reletedToVideoId: id,
    },
  });
};
