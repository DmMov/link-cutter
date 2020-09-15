import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import chain from '../../images/chain';
import { Link } from '../Link/Link';

import './Header.scss';

export const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <img src={chain} alt="site-logo" className="img logo__img"/>
        <p className="logo__text lt1">link</p>
        <p className="logo__text lt2">cutter</p>
      </div>
      {
        auth.isAuthenticated && <>
          <nav className="nav">
            <Link exact to="/create">create</Link>
            <Link exact to="/links">links</Link>
          </nav>
          <button className="btn logoutBtn" onClick={() => auth.logout()}>logout</button>
        </>
      }
    </header>
  )
}
