import React, { useEffect, useState } from 'react';
import './App.css';
import '@esri/calcite-components/dist/calcite/calcite.css';
import "@arcgis/core/assets/esri/themes/dark/main.css";

import { authenticate } from './components/utils/auth';
import { Shell } from './components/Shell';

function App() {
  const [authenticated, setAuthenticated] = useState(false);


  useEffect(() => {
    authenticate().then((result) => {
      setAuthenticated(result);
    }).catch(reason => {
      console.log(reason);
    })
  }, []);
  return (
    <div className="App">
    {authenticated && <Shell/>}
    </div>
  );
}

export default App;
