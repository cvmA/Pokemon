"use client";
import PokemonCard from "@/components/pokemon-card";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PokemonType = () => {
  const type = usePathname();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2${type}`).then((res) => {
      setDetails(res.data);
    });
  }, [type]);
  if (!details) return null;
  console.log(details.pokemon);
  return (
    <div className="flex flex-wrap gap-3 px-20">
      {details.pokemon.map((data, index) => (
        <div key={index}>
          <PokemonCard data={data.pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonType;
