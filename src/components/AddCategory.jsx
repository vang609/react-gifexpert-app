

import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    const newValue = inputValue.trim()
    if (newValue.length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={onInputChange}
        //   onChange={ (event) => onInputChange(event) }
      />
    </form>
  );
};
