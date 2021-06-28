class Api::PokemonController < ApplicationController
  def index 
    sleep 0.5
    @pokemon = Pokemon.all 
    render :index 
  end


  def show 
    sleep 0.5
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon
    else
      print @pokemon.errors.full_messages
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
  end
end
