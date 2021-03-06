import styled from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 8px;
  padding: 16px;

  background: #fff;
  border-radius: 16px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);

  line-height: 2rem;
  text-decoration: none;
  color: #333;
`;

export const ThumbContainer = styled.div`
  height: 80px;
  width: 80px;
`;

export const Thumb = styled.img`
  height: 100%;
`;

export const IdPokemon = styled.span`
  background: #d5d5d5;
  padding: 4px 8px;
  border-radius: 8px;
  margin: 8px 0;
  line-height: 1.6rem;
`;

export const NamePokemon = styled.strong`
  font-size: 1.6rem;
`;

export const TypePokemon = styled.label`
  font-weight: 400;
`;
