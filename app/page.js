"use client";
import PokemonCard from "@/components/pokemon-card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemonList(res.data.results));
  }, []);

  return (
    <div className="flex flex-wrap gap-3 px-20">
      {pokemonList.map((data) => (
        <PokemonCard key={data.name} data={data} />
      ))}
    </div>
  );
}
