import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import { togglePanel, parseJSON } from '../actions';
import Header from './Header';
import Content from './Content';

class App extends Component {
  componentDidMount(){
    const jsonData = '{"headerData": ["30%", "$2000000", "85%"],"contentA": "This should be displayed in Panel A. This is visible by default","contentB": "This should be displayed in Panel B. This should be hidden by default"}';
    const { parseJSON } = this.props;
    parseJSON(jsonData)
  }
  render() {
    const {togglePanel, contentA, contentB, headerData, displayA} = this.props;
    return (
      <div className="App">
        <Header headerData={headerData} togglePanel={togglePanel} displayA={displayA}/>
        <Content contentA={contentA} contentB={contentB} togglePanel={togglePanel} displayA={displayA}/>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  headerData: state.headerData,
  contentA: state.contentA,
  contentB: state.contentB,
  displayA: state.displayA
})

export default connect(mapStateToProps, {togglePanel, parseJSON })(App);
