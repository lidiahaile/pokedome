import "./styles/style.scss";

import {pokemonArray}  from "./data/pokemon.ts";

const cardsContainer = document.querySelector<HTMLDivElement>(".card-container")
const eachCard = document.querySelector<HTMLDivElement> (".card")
const cardImg = document.querySelector<HTMLImageElement>("card__image")
const cardHeading  = document.querySelector<HTMLImageElement>("card__heading")
const cardText  = document.querySelector<HTMLImageElement>("card__text")


if(!cardsContainer || !eachCard|| !cardImg || !cardHeading || !cardText){
    throw new Error ("issue with selectors");
}


pokemonArray.forEach((pokemon) => {
   cardImg.src = pokemonArray.pokemon.sprite;
   
   
});