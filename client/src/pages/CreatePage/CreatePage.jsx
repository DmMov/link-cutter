import React from 'react';
import { CreateLinkForm } from '../../components/CreateLinkForm/CreateLinkForm';
import { Banner } from '../../components/Banner/Banner';
import banner from '../../images/banners/b-1';

export const CreatePage = () => <div className="page createPage">
  <Banner image={banner} title="link creation" />
  <CreateLinkForm />
</div>;