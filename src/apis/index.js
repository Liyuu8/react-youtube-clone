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

// https://developers.google.com/youtube/v3/docs/videos/list

export const fetchPopularData = async () =>
  await youtube.get('/videos', {
    params: {
      ...commonParams,
      chart: 'mostPopular',
    },
  });

export const fetchSelectedData = async (id) =>
  await youtube.get('/videos', {
    params: {
      ...commonParams,
      id,
    },
  });

export const fetchReletedData = async (id) =>
  await youtube.get('/search', {
    params: {
      ...commonParams,
      reletedToVideoId: id,
    },
  });

export const fetchSearchData = async (query) =>
  await youtube.get('/search', {
    params: {
      ...commonParams,
      q: query,
    },
  });
