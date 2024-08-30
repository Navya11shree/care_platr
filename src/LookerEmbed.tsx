// LookerEmbed.tsx
import React, { useEffect, useRef, useState } from 'react';
import { LookerEmbedSDK } from '@looker/embed-sdk';
import { ExtensionContext } from '@looker/extension-sdk-react';

interface EmbedProps {
  folderId: string;
}

const LookerEmbed: React.FC<EmbedProps> = ({ folderId }) => {
  const [folderContents, setFolderContents] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const embedContainer = useRef<HTMLDivElement | null>(null);
  const extensionContext = React.useContext(ExtensionContext);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const sdk = extensionContext.core40SDK;
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

  useEffect(() => {
    if (embedContainer.current && folderContents.length > 0) {
      LookerEmbedSDK.init(extensionContext.extensionSDK.lookerHostData?.hostUrl || '');

      folderContents.forEach(content => {
        if (embedContainer.current && content.id) {
          const embedElement = document.createElement('div');
          embedElement.style.marginBottom = '20px';
          embedContainer.current?.appendChild(embedElement);

          const embedPromise = content.type === 'dashboard'
            ? LookerEmbedSDK.createDashboardWithId(content.id).appendTo(embedElement).build().connect()
            : LookerEmbedSDK.createLookWithId(content.id).appendTo(embedElement).build().connect();

          embedPromise
            .then(() => console.log(`${content.type.charAt(0).toUpperCase() + content.type.slice(1)} ${content.id} embedded successfully`))
            .catch(() => setError(`Error embedding ${content.type} ${content.id}. Please try again.`));
        }
      });
    }
  }, [folderContents, extensionContext.extensionSDK.lookerHostData?.hostUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (folderContents.length === 0) {
    return <div>Loading folder contents...</div>;
  }

  return <div ref={embedContainer} style={{ height: '100vh', width: '100%', overflowY: 'auto' }}></div>;
};

export default LookerEmbed;
