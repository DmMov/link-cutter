import React, { useState } from 'react';
import { Banner } from '../../components/Banner/Banner';
import banner from '../../images/banners/b-3';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

import './AuthPage.scss';

export const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login');

  return <div className="page authPage">
    <Banner image={banner} title="auth" />
    <div className="toggleFormBtnWrap">
      <button
        className="btn toggleFormBtn"
        onClick={() => setActiveForm(value => value === 'login' ? 'register' : 'login')}
      >
        go to {activeForm === 'login' ? 'register' : 'login'} ➨
      </button>
    </div>
    {activeForm === 'login' ? <LoginForm /> : <RegisterForm />}
  </div>;
}