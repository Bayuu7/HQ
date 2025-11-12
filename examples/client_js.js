// client_js.js
// Example usage of JavaScript SDK

import MeshyClient from "../src/clients/js/client.js";

(async () => {
  const client = new MeshyClient("http://localhost:5000", true);
  const job = await client.generateModel("dragon");
  console.log("Job response:", job);
})();
