import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppOne } from './AppOne';
import SnapShot from './SnapShot';
import { Functional } from './functional'
import Getbyrole from './getByRole';
import GetAllbyrole from './getAllByRole';
import GetByLabelText from './getByLabelText';
import GetAllByLabel from './getAllByLabel';
import GetByPlaceHolder from './getByPlaceHolder';
import GetByText from './getText';
import TestId from './getTestId';
import DisplayValue from './displayValue';
import TitleValue from './titleValue';
import AltText from './altText';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppOne /> */}
    {/* <SnapShot /> */}
    {/* <Functional /> */}
    {/* <Getbyrole /> */}
    {/* <GetAllbyrole /> */}
    {/* <GetByLabelText /> */}
    {/* <GetAllByLabel /> */}
    {/* <GetByPlaceHolder /> */}
    {/* <GetByText /> */}
    {/* <TestId /> */}
    {/* <DisplayValue /> */}
    {/* <TitleValue /> */}
    <AltText />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
