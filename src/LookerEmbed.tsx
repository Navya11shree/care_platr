import React, { useEffect, useState, useContext } from 'react';
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
  const { core40SDK, extensionSDK } = useContext(ExtensionContext);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const folder = await core40SDK.ok(core40SDK.folder(folderId));
        const [dashboards, looks] = await Promise.all([
          core40SDK.ok(core40SDK.folder_dashboards(folderId)),
          core40SDK.ok(core40SDK.folder_looks(folderId)),
        ]);

        setFolderName(folder.name);
        setFolderContents([
          { type: 'dashboard', items: dashboards },
          { type: 'look', items: looks }
        ]);
      } catch {
        setError('Failed to fetch folder contents. Please try again.');
      }
    };

    core40SDK && fetchContents();
  }, [core40SDK, folderId]);

  const handleContentClick = (id: string, type: 'dashboard' | 'look') => {
    setSelectedContent(`${type === 'dashboard' ? 'dashboards' : 'looks'}/${id}`);
  };

  if (error) return <div>Error: {error}</div>;

  if (selectedContent) {
    return (
      <iframe
        src={`${extensionSDK.lookerHostData?.hostUrl}/embed/${selectedContent}`}
        style={{ height: '100vh', width: '100%', border: 'none' }}
        title="Looker Embed"
        allowFullScreen
      />
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {folderName && (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FaFolder style={{ fontSize: '2rem', marginRight: '10px' }} />
          <h2 style={{ fontWeight: 'bold', fontSize: '2rem', margin: 0 }}>{folderName}</h2>
        </div>
      )}

      {folderContents.map(({ type, items }) => (
        <div key={type}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.75rem', marginBottom: '10px' }}>
            {type === 'dashboard' ? 'Dashboards' : 'Looks'}
          </h2>
          {items.length > 0 ? (
            items.map((item: any) => (
              <div
                key={item.id}
                onClick={() => handleContentClick(item.id, type)}
                style={{ marginBottom: '10px', cursor: 'pointer', fontSize: '1.25rem' }}
              >
                {item.title}
              </div>
            ))
          ) : (
            <div>No {type}s available.</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LookerEmbed;
