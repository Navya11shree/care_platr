// src/components/LookerEmbed.jsx
import React from 'react';

const LookerEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://timestone.cloud.looker.com/embed/dashboards/284" // Replace with your Looker embed URL
        width="100%"
        height="100%"
        id="looker-embed"
        className="looker-embed"
        style={{ border: 'none' }}
        allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        title="Looker Dashboard"
      />
    </div>
  );
};

export default LookerEmbed;
