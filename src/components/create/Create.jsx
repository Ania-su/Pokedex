import { useState } from "react";
import useCreatePokemon from "@/hooks/useCreatePokemon";
import CreateList from "./CreateList";
import CreateForm from "./CreateForm";
import { Button } from "@mui/material";

const Create = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingPokemon, setEditingPokemon] = useState(null);

  const {
    pokemons,
    addPokemon,
    deletePokemon,
    updatePokemon,
  } = useCreatePokemon();

  const handleSave = (data) => {
    if (editingPokemon) {
      updatePokemon({ ...data, id: editingPokemon.id });
    } else {
      addPokemon(data);
    }

    setEditingPokemon(null);
    setIsCreating(false);
  };

  return (
    <div className="mx-auto p-4 relative h-[calc(100vh-10rem)] text-white">

      {!isCreating && (
        <CreateList
          pokemons={pokemons}
          onDelete={deletePokemon}
          onEdit={(p) => {
            setEditingPokemon(p);
            setIsCreating(true);
          }}
        />
      )}

      {isCreating && (
        <CreateForm
          initialData={editingPokemon}
          onCancel={() => {
            setIsCreating(false);
            setEditingPokemon(null);
          }}
          onCreate={handleSave}
        />
      )}

      {!isCreating && (
        <div className="absolute bottom-4 right-4">
          <Button
            variant="contained"
            onClick={() => setIsCreating(true)}
          >
            Create
          </Button>
        </div>
      )}
    </div>
  );
};

export default Create;