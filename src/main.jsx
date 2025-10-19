import React from 'react';
import ReactDOM from 'react-dom/client';
import IndiaMatrimonialDashboardDetailed from './IndiaMatrimonialDashboardDetailed.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element with id "root" not found in the document.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <IndiaMatrimonialDashboardDetailed />
  </React.StrictMode>
);
