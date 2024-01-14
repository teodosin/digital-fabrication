const { Client } = require("@microsoft/microsoft-graph-client");
const { TokenCredentialAuthenticationProvider } = require("@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials");
const fs = require('fs');
const path = require('path');

const { ClientSecretCredential } = require("@azure/identity");

const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;

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