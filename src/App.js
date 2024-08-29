import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/PublicRouter'; // Assurez-vous que le chemin est correct

function App() {
    return (
      <RouterProvider router={routes} />
    );
}

export default App;
