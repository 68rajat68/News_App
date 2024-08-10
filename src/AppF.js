import './App.css';

import React, { useState } from 'react'
import Navbar from './component_function_based/NavbarF';
import News from './component_function_based/NewsF';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const AppF = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 5;

  const [progress, setProgress] = useState(0);

  const setProgressfun = (progress) => {
    setProgress(progress)
  }

    return (
      // <RouterProvider router={router} />
      <Router>
        <div >
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f78c00'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgressfun}    key="general" pageSize={pageSize} country="in" apiKey={apiKey}  category="general" />} />
            <Route path="/business" element={<News setProgress={setProgressfun}    key="business" pageSize={pageSize} country="in" apiKey={apiKey}  category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgressfun}    key="entertainment" pageSize={pageSize} country="in" apiKey={apiKey}  category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgressfun}    key="health" pageSize={pageSize} country="in" apiKey={apiKey}  category="health" />} />
            <Route path="/science" element={<News setProgress={setProgressfun}    key="science" pageSize={pageSize} country="in" apiKey={apiKey}  category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgressfun}    key="sports" pageSize={pageSize} country="in" apiKey={apiKey}  category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgressfun}    key="technology" pageSize={pageSize} country="in" apiKey={apiKey}  category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
}

export default AppF