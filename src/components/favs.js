import React, { Component } from 'react';
import TopFive from './top_five';
import {Link} from 'react-router-dom';

class Favs extends Component {

  render() {
    return (
      <div className="favs">
        <div>
          favorites
        </div>
        <TopFive/>
        <Link className="link" to='/allFavs'>All</Link>
      </div>
    );
  }
}

export default Favs;
