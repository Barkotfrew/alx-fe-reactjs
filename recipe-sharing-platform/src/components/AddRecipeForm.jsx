import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // Uses target.value
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!formData.steps.trim()) newErrors.steps = 'Steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Recipe submitted successfully!');
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white p-6 rounded-lg shadow-md"> {/* Added shadow-md here */}
        <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 mb-2">Recipe Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients Field */}
          <div>
            <label className="block text-gray-700 mb-2">Ingredients (one per line)</label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              className={`w-full p-2 border rounded ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Steps Field */}
          <div>
            <label className="block text-gray-700 mb-2">Steps</label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="6"
              className={`w-full p-2 border rounded ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
