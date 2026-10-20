import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ 
      backgroundColor: '#0D0D0D', 
      color: '#ffffff', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>BRANDURVA</h1>
      <p style={{ color: '#888' }}>AI-Powered Digital Marketing is launching soon.</p>
    </div>
  </React.StrictMode>
)
