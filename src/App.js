import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import * as CampersAPI from './CampersAPI';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camperData: [],
      iconRecent: "caret down icon",
      iconAllTime: ""
    }
  }

  componentDidMount() {
    CampersAPI.getAll("recent").then(recent => {
      this.setState({
        camperData: recent
      })
    })
  }

  handleRecentData = () => {
    CampersAPI.getAll("recent").then(recent => {
      this.setState({
        camperData: recent,
        iconRecent: "caret down icon",
        iconAllTime: ""
      })
    })
  }

  handleAlltimeData = () => {
    CampersAPI.getAll("alltime").then(alltime => {
      this.setState({
        camperData: alltime,
        iconAllTime: "caret down icon",
        iconRecent: ""
      })
    })
  }
  render() {
    const { camperData, iconAllTime, iconRecent } = this.state
    return (
      <div className="App">
        <h3 className="ui left aligned top attached header">
          <img className="ui mini circular image" src={logo} />
          <div className="content">
            DecadeHew
            <div className="sub header">前端工程師</div>
          </div>
          <div className="h content">
            <a href="https://github.com/decadehew" title="github"><i className="github icon"></i></a>
            <a href="https://decadehew.github.io/" title="技術文章"><i className="newspaper icon"></i></a>
            <a href="https://www.facebook.com/amy262833" title="fb"><i className="facebook square icon"></i></a>
          </div>
        </h3>
        <br />
        <div className="ui container">
          <div className="row">
            <Table 
              id="top"
              camperData={camperData}
              onRecentData={this.handleRecentData}
              onAlltimeData={this.handleAlltimeData}
              iconAllTime={iconAllTime}
              iconRecent={iconRecent}
            />
          </div>
        </div>
        <footer>
        <h4 className="ui horizontal divider header">
          <i className="tag icon"></i>
          <a href="#top">Top</a>
        </h4>
            <a href="https://github.com/decadehew" title="github"><i className="github icon"></i></a>
            <a href="https://decadehew.github.io/" title="技術文章"><i className="newspaper icon"></i></a>
            <a href="https://www.facebook.com/amy262833" title="fb"><i className="facebook square icon"></i></a>
        </footer>
      </div>
    );
  }
}

export default App;
