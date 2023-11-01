import { useState } from "react";

function AddCatForm({ onAdd }) {
  const [inputName, setInputName] = useState("");
  const [inputLatinName, setInputLatinName] = useState("");
  const [inputImgUrl, setInputImgUrl] = useState("");
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onAdd(inputName, inputLatinName, inputImgUrl);
        setInputName("");
        setInputLatinName("");
        setInputImgUrl("");
      }}
    >
      <h3>Add New Cat</h3>
      <label htmlFor="inputName">Name</label>
      <input
        id="inputName"
        type="text"
        value={inputName}
        onChange={(evt) => {
          setInputName(evt.target.value);
        }}
      />
      <label htmlFor="inputLatinName">Latin Name</label>
      <input
        id="inputLatinName"
        type="text"
        value={inputLatinName}
        onChange={(evt) => {
          setInputLatinName(evt.target.value);
        }}
      />
      <label htmlFor="inputImgUrl">Image Url</label>
      <input
        id="inputImgUrl"
        type="text"
        value={inputImgUrl}
        onChange={(evt) => {
          setInputImgUrl(evt.target.value);
        }}
      />
      <button>Create New Cat</button>
    </form>
  );
}

export default AddCatForm;
