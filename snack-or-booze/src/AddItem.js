// FoodForm.js
import React, { useState } from "react";
import "./FoodForm.css";
import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

const drinkUrl = () => `${BASE_API_URL}/drinks`;
const snackUrl = () => `${BASE_API_URL}/snacks`;

function FoodForm() {
  const initialState = {
    item: "",
    name: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isPosted, setIsPosted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.name === "") {
        alert("Item name is missing. Please try again.");
        return;
      }

      const data = formData;
      const url = formData.item === "drink" ? drinkUrl() : snackUrl();
      await axios.post(url, data);
      setFormData(initialState);
      setIsPosted(true);
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the item. Please try again.");
    }
  };

  return (
    <div className="FoodForm">
      <h2 className="FoodForm-title">Add a New Item</h2>
      {isPosted && <p style={{ color: "green" }}>Item was added</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item Type</label>
        <select
          id="item"
          name="item"
          value={formData.item}
          onChange={handleChange}
        >
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
        <br />
        <label className="FoodForm-Name" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default FoodForm;
