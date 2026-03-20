// import { FaDumbbell, FaTrash, FaEdit } from "react-icons/fa";
// import getTypeGradient from "@/utils/getTypeGradient";

import getTypeGradient from "@/utils/getTypeGradient";
import CustomPokemonBack from "./CustomCardBack";
import { Dot, Ruler } from "lucide-react";
import { FaDumbbell } from "react-icons/fa";
import PokeTypeBadge from "../PokeTypeBadge";

function CustomPokemonCard({ pokemon, onDelete, onEdit }) {
  return (
    <div className="group [perspective:1500px] w-[290px] h-[400px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT (inchangé) */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {/* Garde ton front EXACT ici */}
          <div
            className={`rounded-xl shadow-md px-5 pt-5 pb-10 text-center text-white h-full ${getTypeGradient(
              pokemon.types[0],
            )}`}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-full h-[140px] object-contain"
            />

            <h1 className="text-2xl font-extrabold capitalize">
              <span className="flex items-center justify-center">
                <Dot size={64} />
                {pokemon.name}
                <Dot size={64} />
              </span>
            </h1>

            <div className="flex justify-center gap-2 mt-2">
              {pokemon.types.map((t) => (
                <PokeTypeBadge type={t} key={t} />
              ))}
            </div>

            <div className="flex justify-center gap-10 mt-3">
              <div className="flex flex-col">
                <span>{pokemon.height} M</span>
                <span className="text-sm flex items-center gap-2">
                  <Ruler size={14} /> Height
                </span>
              </div>

              <div className="flex flex-col">
                <span>{pokemon.weight} KG</span>
                <span className="text-sm flex items-center gap-2">
                  <FaDumbbell size={14} /> Weight
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <CustomPokemonBack
          pokemon={pokemon}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
}

export default CustomPokemonCard;
