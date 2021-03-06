import React from 'react';
import './LinkCard.scss';

export const LinkCard = ({ link: { _id, to, from, clicks, date } }) => <div className="linkCard">
  <h3 className="linkCard__title">Detail of the link ⇒ <span className="highlight">{_id}</span></h3>
  <p className="linkCard__linkWrap linkCard__to">
    Your link: <a className="highlight link" href={to} target="_blank" rel="noopener noreferrer">{to.split('//')[1]}</a>
  </p>
  <p className="linkCard__linkWrap linkCard__from">
    From: <a className="highlight link" href={from} target="_blank" rel="noopener noreferrer">{from.split('//')[1]}</a>
  </p>
  <p className="linkCard__clicks">Clicks: <strong className="digit">{clicks}</strong></p>
  <p className="linkCard__creadedAt">
    Created at: <strong className="digit">{new Date(date).toLocaleDateString()}</strong>
  </p>
</div>;