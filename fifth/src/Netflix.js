import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Netflix extends Component {
    render() {
        let forEachAccount = this.props.movies.map(
            eachItemTest => {
                return (
                    <div>
                        <h4> Name: {eachItemTest.name}</h4>
                        <h4> Year Released: {eachItemTest.yearReleased}</h4>
                        <h4> Genre: {eachItemTest.genre}</h4>

                    </div>
                )
            }
        );
        return (
            <div className="DisplayMovies">

                <p>
                    {forEachAccount}
                </p>
            </div>
        );
    }
}

export default Netflix;