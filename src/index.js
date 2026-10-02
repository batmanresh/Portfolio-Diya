import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { loadContent } from './content/content';

const Admin = React.lazy(() => import('./admin/Admin'));
const isAdmin = window.location.pathname.startsWith('/admin');

const root = ReactDOM.createRoot(document.getElementById('root'));

if (isAdmin) {
  root.render(
    <React.StrictMode>
      <React.Suspense fallback={null}>
        <Admin />
      </React.Suspense>
    </React.StrictMode>
  );
} else {
  loadContent().then(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
}
