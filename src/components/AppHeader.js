import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

const AppHeader = () => {
  return (
    <div>
      <img src="/images/jungyeon.jfif" alt="header-img" />
      <Header as="h1">탱구리</Header>
      <Gnb></Gnb>
    </div>
  )
}

export default AppHeader
