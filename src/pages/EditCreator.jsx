import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: '',
  });

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.log('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
    }

    fetchCreator();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;

    setCreator((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleUpdate(event) {
    event.preventDefault();

    const { error } = await supabase
      .from('creators')
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageURL: creator.imageURL,
      })
      .eq('id', id);

    if (error) {
      console.log('Error updating creator:', error);
    } else {
      navigate('/');
    }
  }

  async function handleDelete() {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);

    if (error) {
      console.log('Error deleting creator:', error);
    } else {
      navigate('/');
    }
  }

  return (
    <div>
      <h1>Edit Creator</h1>

      <form onSubmit={handleUpdate}>
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
          value={creator.imageURL || ''}
          onChange={handleChange}
        />

        <button type="submit">Update Creator</button>
      </form>

      <button onClick={handleDelete}>
        Delete Creator
      </button>
    </div>
  );
}

export default EditCreator;