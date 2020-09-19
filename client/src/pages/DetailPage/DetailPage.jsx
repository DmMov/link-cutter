import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../constants';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../../components/Loader/Loader';
import { LinkCard } from '../../components/LinkCard/LinkCard';

export const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const { id } = useParams();

  const getLink = useCallback(
    async () => {
      try {
        const data = await request(`${baseUrl}/link/${id}`, 'get', null, { Authorization: `Bearer ${token}`});
        setLink(data);
      } catch (error) { }
    },
    [token, id, request],
  );

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return <div className="page">
    { !loading && link && <LinkCard link={link} /> }
  </div>;
}