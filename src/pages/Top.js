import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { fetchPopularData } from '../apis/index';

const Top = () => {
  useEffect(() => {
    fetchPopularData().then((response) => console.log('data', response));
  }, []);
  return <Layout>Top Page</Layout>;
};

export default Top;
