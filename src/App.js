import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'
import CatList from './CatList'
class App extends Component {


   componentDidMount(){

    this.props.fetchCats()
   }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


 
function mapStateToProps(state){
  console.log("state=",state)

  return {
    catPics: state.cats.pictures
  }
}

 
export default connect(mapStateToProps, {fetchCats})(App)
 