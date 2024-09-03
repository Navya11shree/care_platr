import React, { useEffect, useState } from 'react';
import { ExtensionContext } from '@looker/extension-sdk-react';
import { FaFolder } from 'react-icons/fa'; 

interface EmbedProps {
  folderId: string;
}

const LookerEmbed: React.FC<EmbedProps> = ({ folderId }) => {
  const [folderContents, setFolderContents] = useState<any[]>([]);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [folderName, setFolderName] = useState<string | null>(null);
  const extensionContext = React.useContext(ExtensionContext);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const sdk = extensionContext.core40SDK;

        // Fetch folder details first
        const folder = await sdk.ok(sdk.folder(folderId));
        setFolderName(folder.name);

        // Fetch dashboards and looks
        const dashboards = await sdk.ok(sdk.folder_dashboards(folderId));
        const looks = await sdk.ok(sdk.folder_looks(folderId));

        const typedDashboards = dashboards.map((dashboard: any) => ({ ...dashboard, type: 'dashboard' }));
        const typedLooks = looks.map((look: any) => ({ ...look, type: 'look' }));

        setFolderContents([...typedDashboards, ...typedLooks]);
      } catch {
        setError('Failed to fetch folder contents. Please try again.');
      }
    };

    if (extensionContext.core40SDK) {
      fetchContents();
    }
  }, [extensionContext.core40SDK, folderId]);

  const handleContentClick = (id: string, type: 'dashboard' | 'look') => {
    setSelectedContent(`${type === 'dashboard' ? 'dashboards' : 'looks'}/${id}`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (selectedContent) {
    const iframeSrc = `${extensionContext.extensionSDK.lookerHostData?.hostUrl}/embed/${selectedContent}`;
    return (
      <iframe
        src={iframeSrc}
        style={{ height: '100vh', width: '100%', border: 'none' }}
        title="Looker Embed"
        allowFullScreen
      ></iframe>
    );
  }

  const dashboards = folderContents.filter(content => content.type === 'dashboard');
  const looks = folderContents.filter(content => content.type === 'look');

  return (
    <div style={{ padding: '20px' }}>
      {/* Folder name with icon */}
      {folderName && (
        <div style={{
          display: 'flex',
          alignItems: 'center', 
          marginBottom: '20px'
        }}>
          <FaFolder style={{ fontSize: '2rem', marginRight: '10px' }} />
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', margin: 0 }}>{folderName}</h2>
        </div>
      )}

      {/* Dashboards section */}
      {dashboards.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.75rem', marginBottom: '10px' }}>Dashboards</h2>
          {dashboards.map(dashboard => (
            <div
              key={dashboard.id}
              onClick={() => handleContentClick(dashboard.id, 'dashboard')}
              style={{ marginBottom: '10px', cursor: 'pointer', fontSize: '1.25rem' }}
            >
              {dashboard.title}
            </div>
          ))}
        </div>
      )}

      {/* Looks section */}
      {looks.length > 0 && (
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.75rem', marginBottom: '10px' }}>Looks</h2>
          {looks.map(look => (
            <div
              key={look.id}
              onClick={() => handleContentClick(look.id, 'look')}
              style={{ marginBottom: '10px', cursor: 'pointer', fontSize: '1.25rem' }}
            >
              {look.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LookerEmbed;
