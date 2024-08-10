import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  pageSize = 5;
  articleCountNo =[0, 0, 0, 0, 0, 0, 0];
  state = {
    progress:0,
    
  }

  setArticalCountNo = (idx,value)=>{
    // let temp = [0,0,0,0,0,0,0]
    // temp[idx]=value
    // this.setState({articleCountNo:temp})
    this.articleCountNo[idx]=value;
    console.log(this.articleCountNo);
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }

  render() {
    return (
      // <RouterProvider router={router} />
      <Router>
        <div >
          <Navbar />
          <LoadingBar
            height={3}
            color='#f78c00'
            progress={this.state.progress }
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="general" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="business" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="entertainment" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="health" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="science" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="sports" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} articalCountNo={this.articleCountNo} setArticalCountNo={this.setArticalCountNo}   key="technology" pageSize={this.pageSize} country="in" apiKey={this.apiKey}  category="technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
