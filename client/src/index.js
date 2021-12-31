import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import App from './App';
import "./index.css"
import {Provider} from "./context/context"

ReactDOM.render(
  <SpeechProvider appId='1bfe00c0-1773-4bbe-b147-88c493a0fb6f' language='en-US'>
  <Provider>
    <App />
    </Provider>
      </SpeechProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

