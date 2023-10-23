"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../app/globals.css";

const PokemonCard = ({ data }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(data.url).then((res) => setDetails(res.data));
  }, []);
  return (
    <div className="flex flex-col items-center rounded-lg bg-zinc-900 p-8 capitalize">
      <Link className="flex flex-col items-center" href={`${data?.name}`}>
        <img
          className={`type_${details?.types?.[0]?.type?.name} rounded-full `}
          src={details?.sprites?.front_default}
          alt=""
        />
        {details.name}
      </Link>

      <div className="flex flex-row gap-3">
        {details?.types?.map((item, index) => (
          <span key={index} className={`type_${item.type.name} rounded-md p-1`}>
            <Link href={`type/${item?.type?.name}`}>{item.type.name}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
