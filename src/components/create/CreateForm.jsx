import { useEffect, useState } from "react";
import { POKEMON_TYPES } from "@/constants/pokemonType";
import getTypeColor from "@/utils/getTypeColor";
import getTypeIcon from "@/utils/getTypeIcon";
import { Button, TextField, Slider } from "@mui/material";

const CreateForm = ({ onCancel, onCreate, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    types: [],
    description: "",
    genus: "",
    hp: 50,
    attack: 50,
    defense: 50,
    height: "",
    weight: "",
    image: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 preload data si edit
  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        types: initialData.types || [],  
        hp: initialData.hp || 50,  
        attack: initialData.attack || 50,
        defense: initialData.defense || 50,
      });
      setPreview(initialData.image);
    }
  }, [initialData]);

  // 🔥 IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;

      setPreview(base64); // affichage immédiat
      setForm((prev) => ({
        ...prev,
        image: base64, // stocké en base64
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const formatted = {
      ...form,
      types: form.types,
    };

    onCreate(formatted);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <h2 className="text-xl font-bold">Create Pokemon</h2>

      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Species (ex: Seed Pokémon)"
        name="genus"
        value={form.genus}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />

      <div className="flex flex-wrap gap-2">
        {POKEMON_TYPES.map((type) => {
          const Icon = getTypeIcon(type);
          const isSelected = form.types.includes(type);

          return (
            <button
              key={type}
              type="button"
              onClick={() => {
                let newTypes;

                if (isSelected) {
                  newTypes = form.types.filter((t) => t !== type);
                } else {
                  if (form.types.length >= 2) return; // max 2 types
                  newTypes = [...form.types, type];
                }

                setForm({ ...form, types: newTypes });
              }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs transition ${getTypeColor(
                type,
              )} ${isSelected ? "ring-2 ring-white" : "opacity-60"}`}
            >
              <Icon size={12} />
              {type}
            </button>
          );
        })}
      </div>

      <TextField
        label="Height"
        name="height"
        value={form.height}
        onChange={handleChange}
      />

      <TextField
        label="Weight"
        name="weight"
        value={form.weight}
        onChange={handleChange}
      />

      <div className="flex flex-col gap-4">
        <div>
          <span>HP: {form.hp}</span>
          <Slider
            value={form.hp}
            min={1}
            max={150}
            onChange={(e, val) => setForm({ ...form, hp: val })}
          />
        </div>

        <div>
          <span>Attack: {form.attack}</span>
          <Slider
            value={form.attack}
            min={1}
            max={150}
            onChange={(e, val) => setForm({ ...form, attack: val })}
          />
        </div>

        <div>
          <span>Defense: {form.defense}</span>
          <Slider
            value={form.defense}
            min={1}
            max={150}
            onChange={(e, val) => setForm({ ...form, defense: val })}
          />
        </div>
      </div>

      {/* IMAGE INPUT */}
      <div className="flex flex-col gap-2">
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-[150px] h-[150px] object-contain"
          />
        )}
      </div>

      <div>
        <div className="flex justify-end gap-2">
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="button" variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
