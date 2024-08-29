import React, { useState, useEffect } from 'react';
import { LookerBrowserSDK, IFolder } from '@looker/sdk';

const MyFolder: React.FC = () => {
  const [folder, setFolder] = useState<IFolder | null>(null);
  const [error, setError] = useState<string | null>(null);

  const folderId = '113'; // Replace with the actual ID of "My Folder"

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        // Initialize the Looker SDK
        const sdk = LookerBrowserSDK.init40();

        // Ensure SDK is initialized correctly
        if (!sdk) {
          throw new Error('SDK initialization failed');
        }

        // Fetch the specific folder by ID
        const folder = await sdk.ok(sdk.folder(folderId));

        setFolder(folder);
      } catch (err) {
        setError('Error fetching folder: ' + (err as Error).message);
      }
    };

    fetchFolder();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!folder) {
    return <p>Loading folder...</p>;
  }

  return (
    <div>
      <h2>My Folder</h2>
      <div>
        <h3>{folder.name}</h3>
        <p>ID: {folder.id}</p>
        <p>Parent ID: {folder.parent_id || 'No parent'}</p>
      </div>
    </div>
  );
};

export default MyFolder;
