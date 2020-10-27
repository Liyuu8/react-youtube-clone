import React, { useEffect, useContext } from 'react';
import Layout from '../components/layout/Layout';
import { fetchPopularData } from '../apis/index';
import { Store } from '../store';

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((response) => {
      console.log('data', response);
      setGlobalState({
        type: 'SET_POPULAR',
        payload: { popular: response.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Layout>Top Page</Layout>;
};

export default Top;
