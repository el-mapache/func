import React from 'react'
import traverse from '../../modules/traverse';
import interrupt from '../../modules/interrupt'
import './featured.css';

const spritePath = traverse(['sprites', 'front_shiny'])

const showImageOf = maybePokemon => {
  <img
    role="presentation"
    className="featured"
    src={maybePokemon} />
};

const Featured = ({ currentPokemon }) =>
  <div>
    {
      currentPokemon
        .chain(spritePath)
        .map(interrupt('value of path'))
        .map(showImageOf)
        .map(interrupt('show image of'))
        .getOrElse(null)
    }
  </div>

export default Featured;
