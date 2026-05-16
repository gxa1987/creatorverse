import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { error } = await supabase
      .from('creators')
      .insert({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      });

    if (error) {
      console.log('Error adding creator:', error);
    } else {
      navigate('/');
    }
  }

  return (
    <div>
      <h1>Add New Creator</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
          required
        />

        <label>URL</label>
        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={creator.description}
          onChange={handleChange}
          required
        />

        <label>Image URL optional</label>
        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
        />

        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
