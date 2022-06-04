import React from 'react';
import Search from './Components/Search';
import SiteTitle from './Components/SiteTitle';
import WeatherDetail from './Components/WeatherDetail';

function App() {
  return (
    <div className="App">
      <SiteTitle />
      <Search />
      <WeatherDetail/>
    </div>
  );
}

export default App;
