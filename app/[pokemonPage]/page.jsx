"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PokemonPage = () => {
  const name = usePathname();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon${name}`).then((res) => {
      setDetails(res.data);
    });
  }, [name]);

  if (!details) return null;

  return (
    <div>
      <h2>{details.name}</h2>
      <img src={details.sprites.front_default} alt={details.name} />
    </div>
  );
};

export default PokemonPage;
