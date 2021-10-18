import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

i18n  
.use(HttpApi)
.use(initReactI18next) // passes i18n down to react-i18next  
.use(LanguageDetector)

.init({    
  supportedLngs: ['en','ar'],
  fallbackLng: "en",    
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches:['cookie']
  },
  backend:{
    loadPath: '/locales/{{lng}}/translation.json',
  },
  react:{
    useSuspense: false
  }

 });


ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

