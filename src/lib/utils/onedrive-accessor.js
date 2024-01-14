import { Client } from "@microsoft/microsoft-graph-client";
// import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
let TokenCredentialAuthenticationProvider;
import("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials").then((module) => {
    TokenCredentialAuthenticationProvider = module.TokenCredentialAuthenticationProvider;
});
import { ClientSecretCredential } from "@azure/identity";
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

const tokenCredential = new ClientSecretCredential(tenantId, clientId, clientSecret);

// Create an authentication provider
const authProvider = new TokenCredentialAuthenticationProvider(tokenCredential, {
  scopes: ["https://graph.microsoft.com/.default"],
});

// Create a Graph client
const client = Client.initWithMiddleware({ authProvider });

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