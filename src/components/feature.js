import React, { Component } from 'react';
import PlanetList from './planet_list'
import Planet from './Planet';

export default class Feature extends Component {
    render() {
      return (
        <div>
          <Planet />
         <PlanetList />
        </div>
      );
    }
  }
  