import React, { Component } from 'react'

export default class PokemonForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            poke_type: "",
            name: "",
            attack: null,
            defense: null,
            image_url: ""   
        }
        this.updateName = this.updateName.bind(this)
        this.updateAttack = this.updateAttack.bind(this)
        this.updateDefense = this.updateDefense.bind(this)
        this.updateType = this.updateType.bind(this)
        this.updateImage = this.updateImage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    updateName(e){
        this.state.name = e.target.value
    }
    updateAttack(e){
        this.state.attack = e.target.value
    }
    updateDefense(e){
        this.state.defense = e.target.value
    }
    updateType(e){
        this.state.poke_type = e.target.value
    }
    updateImage(e){
        this.state.image_url = e.target.value
    }

    handleSubmit(e){
        debugger
        e.preventDefault()
        this.props.createPokemon(this.state).then(newPokemon => {
        debugger
        this.props.history.push(`pokemon/${newPokemon.id}`);
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={this.updateName} type="text" id="name" />

                <label htmlFor="attack">Attack</label>
                <input onChange={this.updateAttack} type="text" id="attack" />

                <label htmlFor="defense">Defense</label>
                <input onChange={this.updateDefense} type="text" id="defense" />

                <label htmlFor="type">Type</label>
                <input onChange={this.updateType} type="text" id="type" />

                <label htmlFor="image-url">Image Url</label>
                <input onChange={this.updateImage} type="text" id="image-url" />

                <button onClick={this.handleSubmit}></button>

                <div>
                    <ul>
                        {this.props.errors}
                    </ul>
                </div>
            </div>
        )
    }
}
