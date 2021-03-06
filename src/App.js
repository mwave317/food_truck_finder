import React, { Component } from 'react'
import Header from './components/header'
import FirstDisplay from './components/opening_display'
import AllFavs from './components/all_favs'
import TruckInfo from './components/fav_info_details'
import { Route, Switch, withRouter } from 'react-router-dom'
import { receiveData } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.search()
  }

  render() {
    // console.log(this.props.favorites)
    return (
      <div className="appWrapper">
        <Header/>

        <Switch>
          <Route exact path='/' component={FirstDisplay} />
          <Route path='/allFavs' component={AllFavs} />
          {/* <Route path='/allFavs' render={props => <AllFavs {...props} favorites={this.props.favorites} />} /> */}
          <Route path='/trucks/:index' component={TruckInfo} />
          {/* <Route path='/trucks/:index' render={props => <TruckInfo {...props} favorites={this.props.favorites} />} /> */}
        </Switch>
      </div>
    )
  }
}

// connecting to the redux store below this point

  function state2props(state){
    return {
      favorites: state.favorites,
    }
  }

  function dispatch2props(dispatch) {
    return {
      search: () => {
        fetch('https://desolate-lowlands-68945.herokuapp.com/foodtrucks')
        .then( res => res.json() )
        .then( res => {
          dispatch(receiveData(res))
          console.log(res);

        })
      },
    }
  }

  export default withRouter(connect (state2props, dispatch2props ) (App))
