import React, { useState, useEffect } from 'react';
import { LookerBrowserSDK, IFolder, ILook, IDashboard } from '@looker/sdk';

const MyFolder: React.FC = () => {
  const [folder, setFolder] = useState<IFolder | null>(null);
  const [looks, setLooks] = useState<ILook[]>([]);
  const [dashboards, setDashboards] = useState<IDashboard[]>([]);
  const [error, setError] = useState<string | null>(null);

  const folderId = '113'; // Replace with the actual ID of "My Folder"

  useEffect(() => {
    const fetchFolder = async () => {
      try {
        const sdk = LookerBrowserSDK.init40();

        // Fetch the specific folder by ID
        const folder = await sdk.ok(sdk.folder(folderId));
        setFolder(folder);

        // Fetch looks in the folder
        const folderLooks = await sdk.ok(sdk.folder_looks(folderId));
        setLooks(folderLooks);

        // Fetch dashboards in the folder
        const folderDashboards = await sdk.ok(sdk.folder_dashboards(folderId));
        setDashboards(folderDashboards);
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
      <div>
        <h3>Looks</h3>
        <ul>
          {looks.map((look) => (
            <li key={look.id}>{look.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Dashboards</h3>
        <ul>
          {dashboards.map((dashboard) => (
            <li key={dashboard.id}>{dashboard.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyFolder;
