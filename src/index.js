import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes } from './routes/index';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './stateManagement/redux/store';
import { UserProvider } from './stateManagement/contextApi/UserContext';
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);
