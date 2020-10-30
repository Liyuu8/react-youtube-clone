import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import Style from './Header.module.sass';
import { Store } from '../../store';

const Header = () => {
  const [term, setTerm] = useState('');
  const { globalState, setGlobalState } = useContext(Store);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalState({
      type: 'SET_TERM',
      payload: { term },
    });
    history.push(`/search?query=${term}`);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setTerm(globalState.term), []);

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to="/">YouTube Clone</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="検索"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
