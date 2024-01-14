import { Client } from "@microsoft/microsoft-graph-client";
import { ConfidentialClientApplication } from "@azure/msal-node";
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;

if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Environment variables AZURE_TENANT_ID, AZURE_CLIENT_ID, or AZURE_CLIENT_SECRET are not set');
}

const config = {
    auth: {
        clientId: clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        clientSecret: clientSecret
    }
};

const pca = new ConfidentialClientApplication(config);

// Authenticate to get the access token
const authResult = await pca.acquireTokenByClientCredential({
    scopes: ["https://graph.microsoft.com/.default"]
});

if (!authResult || !authResult.accessToken) {
    throw new Error('Could not authenticate');
}

// Create a Graph client
const client = Client.init({
    authProvider: (done) => {
        done(null, authResult.accessToken);
    }
});

async function syncFiles() {
    // Get the files in the OneDrive folder
    const folderPath = encodeURIComponent('PROJECTS/--OBSIDIAN--/Obsidian Vault/WebsitePosts');
    const driveItems = await client.api(`/me/drive/root:/${folderPath}:/children`).get();
  
    // Download each file and save it to the src/posts directory
    for (const driveItem of driveItems.value) {
      const fileContent = await client.api(`/me/drive/items/${driveItem.id}/content`).get();
      fs.writeFileSync(path.join(__dirname, 'src/posts', driveItem.name), fileContent);
    }
}

syncFiles();