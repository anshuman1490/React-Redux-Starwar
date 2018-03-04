import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';


class PlanetList extends Component {

    renderPlanetList(planet, index) {
       

        const diameter = planet.diameter;
        const name = planet.name;

        return (
            <tr key={index}>
                <td> {name}</td>
                <td>{diameter}</td>

            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Planet</th>
                        <th>Diameter</th>

                    </tr>
                </thead>
                <tbody>

                    {this.props.planets.length == 0 ? this.props.planet.map(this.renderPlanetList)
                        : this.props.planets.map(this.renderPlanetList)}
                </tbody>
            </table>
        );

    }
}



function mapStateToProps(state) {
   
    return ({
        planets: state.msgs,
        planet: state.msg
    });
}

export default connect(mapStateToProps)(PlanetList);