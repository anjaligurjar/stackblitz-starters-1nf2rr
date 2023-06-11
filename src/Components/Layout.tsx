import * as React from 'react';
import { Header } from './Header';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <h1> wwelcome </h1>
      <div> {children}</div>
    </div>
  );
};
