
// Importing useroutes from react router-dom
import { useRoutes, Link } from 'react-router-dom';

// importing showcreators and other from pages
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';


// Defining the path for all different pages: 
function App() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/add', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
  ]);

  return (
    <div>
      <nav>
        <Link to="/">Creatorverse</Link>
        {' | '}
        <Link to="/add">Add Creator</Link>
      </nav>

      <main>
        {routes}
      </main>
    </div>
  );
}

export default App;