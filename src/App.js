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
          <img class="ui mini circular image" src={logo} />
          <div class="content">
            DecadeHew
            <div class="sub header">前端工程師</div>
          </div>
        </h3>
        <br />
        <div className="ui container">
          <div className="row">
            <Table 
              camperData={camperData}
              onRecentData={this.handleRecentData}
              onAlltimeData={this.handleAlltimeData}
              iconAllTime={iconAllTime}
              iconRecent={iconRecent}
            />
          </div>
        </div>
        <footer>
        <h4 class="ui horizontal divider header">
          <i class="tag icon"></i>
          More About
        </h4>
          <a href="#"><i class="github icon"></i></a>
          <a href="#"><i class="facebook square icon"></i></a>
        </footer>
      </div>
    );
  }
}

export default App;
