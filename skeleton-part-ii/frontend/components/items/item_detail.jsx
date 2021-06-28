import React, { Component } from 'react'

export default class ItemDetail extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Name: {this.props.item.name}</li>
                    <li>Price: {this.props.item.price}</li>
                    <li>Happiness: {this.props.item.happiness}</li>
                    <img src={this.props.item.imageUrl} alt="" />
                </ul>
            </div>
        )
    }
}
