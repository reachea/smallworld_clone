import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';

import './i18next';
import i18next from 'i18next';


ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~~</div>)} >
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Suspense>,
  document.getElementById('root')
);