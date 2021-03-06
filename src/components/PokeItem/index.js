/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  CardItem,
  ThumbContainer,
  Thumb,
  IdPokemon,
  NamePokemon,
  TypePokemon,
} from './styles';

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: '',
    types: [],
    thumb: '',
    info: '',
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;

        setPokemon({
          id: data.id,
          name: data.name,
          types: data.types,
          thumb: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
          info: `/pokemon/${data.id}`,
        });
      })
      .catch((error) => {
        alert('Ocorreu um error ao carregar o pokemon ', error);
      });
  }, []);

  return (
    <CardItem to={pokemon.info}>
      <ThumbContainer>
        <Thumb src={pokemon.thumb} alt="bulbasaur" />
      </ThumbContainer>
      <IdPokemon>#00{pokemon.id}</IdPokemon>
      <NamePokemon>{pokemon.name}</NamePokemon>
      <TypePokemon>
        Type:
        {pokemon.types.map((t) => (
          <li key={t.slot}>{t.type.name}</li>
        ))}
      </TypePokemon>
    </CardItem>
  );
};

export default Card;
