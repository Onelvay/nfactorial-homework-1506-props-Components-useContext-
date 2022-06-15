import { useState } from "react";

import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import TextField from '@mui/material/TextField';
import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";

import { ItemSpisok } from "../sw-item-spisok";

import { ItemLists } from "../sw-item-lists";

const Low=[
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  }
]

export const Content = ({ handleCreateFan }) => {
  const [selector, setSelector] = useState("Characters");

  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };
  return (
  
    <div className="content-layout">
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      >
        <option>Characters</option>
        <option>Planets</option>
        <option>Starships</option>
      </select>

      {selector === "Characters" &&
        swCharacters.map((character) => (
          <ItemLists key={character.name} item={character} type="chars">
            <ItemSpisok>gender: {character.gender}</ItemSpisok>
            <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "Planets" &&
        swPlanets.map((planet) => (
          <ItemLists key={planet.name} item={planet} type="planets">
            <ItemSpisok>Rotation Period: {planet.rotation_period}</ItemSpisok>
            <ItemSpisok>Orbital Period: {planet.orbital_period}</ItemSpisok>
          </ItemLists>
        ))}
        {selector === "Starships" &&
        swStarships.map((starship) => (
          <ItemLists key={starship.name} item={starship} type="starships">
            <ItemSpisok>cost in credits: {starship.cost_in_credits}</ItemSpisok>
            <ItemSpisok>passengers: {starship.passengers}</ItemSpisok>
          </ItemLists>
        ))}
        </div>

  );
};