import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

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

  if (!creator) {
    return <p>Loading creator...</p>;
  }

  return (
    <div>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          width="300"
        />
      )}

      <h1>{creator.name}</h1>

      <p>{creator.description}</p>

      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit Creator Page
      </a>

      <br />
      <br />

      <Link to={`/edit/${creator.id}`}>Edit Creator</Link>
    </div>
  );
}

export default ViewCreator;