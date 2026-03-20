import CustomPokemonCard from "./CustomPokemonCard";

const CreateList = ({ pokemons, onDelete, onEdit }) => {
  if (!pokemons.length) {
    return (
      <p className="text-center text-gray-400 mt-10">
        You haven't created any pokemon yet.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {pokemons.map((p) => (
        <CustomPokemonCard
          key={p.id}
          pokemon={p}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default CreateList;