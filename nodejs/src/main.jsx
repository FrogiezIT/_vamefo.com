import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

const clearLegacyBrowserCaches = () => {
  if (typeof window === 'undefined') {
    return;
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations?.()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});
  }

  if ('caches' in window) {
    window.caches.keys()
      .then((keys) => Promise.all(keys.map((key) => window.caches.delete(key))))
      .catch(() => {});
  }
};

clearLegacyBrowserCaches();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
