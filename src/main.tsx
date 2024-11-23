import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="490c61e80939411bb5e149c3312ffc86"
      domain="https://educator.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <App />
    </KindeProvider>

  </StrictMode>,
)