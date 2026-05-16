// Importing necessary tools:

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .order('created_at', { ascending: false });

      if (error) {
        console.log('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    }

    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Creatorverse</h1>
      <p>My favorite content creators.</p>

      <Link to="/add">Add New Creator</Link>

      <div>
        {creators.length > 0 ? (
          creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))
        ) : (
          <p>No creators yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;

