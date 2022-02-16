import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmTitle = {Setting.FILM_TITLE} filmGenre = {Setting.FILM_GENRE} filmYear = {Setting.FILM_YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
