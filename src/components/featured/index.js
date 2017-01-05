import React from 'react'
import traverse from '../../modules/traverse';
import './featured.css';

const spritePath = traverse(['sprites', 'front_shiny'])

const showImageOf = maybePokemon =>
  <img
    role="presentation"
    className="featured"
    src={maybePokemon} />

const Featured = ({ currentPokemon }) =>
  <div>
    {
      currentPokemon
        .chain(spritePath)
        .map(showImageOf)
        .getOrElse(null)
    }
  </div>

export default Featured;
