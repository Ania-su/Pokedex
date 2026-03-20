import { FaTrash, FaEdit } from "react-icons/fa";
import getTypeGradient from "@/utils/getTypeGradient";
import PokeTypeBadge from "@/components/PokeTypeBadge";
import { PokeStatBadge } from "../PokeStatsBadge";

function CustomPokemonBack({ pokemon, onDelete, onEdit }) {
  return (
    <div
      className={`absolute inset-0 rounded-xl p-4 text-white flex flex-col justify-between ${getTypeGradient(
        pokemon.types[0],
      )} [transform:rotateY(180deg)] [backface-visibility:hidden]`}
    >
      <div className="space-y-2">
        <h2 className="text-xl font-bold capitalize">- {pokemon.name} -</h2>

        <p className="text-sm test-foreground font-semibold mb-2">
          {pokemon.genus}
        </p>

        <div className="h-32 justify-center items-center px-6 mt-4">
          <p className=" text-center text-sm font-semibold">
            {pokemon.description}
          </p>
        </div>

        {/* STATS */}
        <div className="items-center bottom-0 flex flex-col">
          <div className="mb-5">
            <PokeStatBadge
              pokeStatData={[
                { name: "hp", value: pokemon.hp },
                { name: "attack", value: pokemon.attack },
                { name: "defense", value: pokemon.defense },
              ]}
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 mt-4">
        <button onClick={() => onEdit(pokemon)}>
          <FaEdit className="text-blue-300 hover:text-blue-500" />
        </button>

        <button onClick={() => onDelete(pokemon.id)}>
          <FaTrash className="text-red-300 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}

const Stat = ({ label, value }) => {
  return (
    <div>
      <div className="flex justify-between text-xs">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="w-full h-2 bg-white/20 rounded">
        <div
          className="h-full bg-white rounded"
          style={{ width: `${(value / 150) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default CustomPokemonBack;
