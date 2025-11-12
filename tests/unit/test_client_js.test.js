// test_client_js.test.js
// Unit test for JS client

import MeshyClient from "../../src/clients/js/client.js";

test("generateModel returns JSON", async () => {
  const client = new MeshyClient("http://localhost:5000", true);
  const result = await client.generateModel("test prompt");
  expect(result).toHaveProperty("status");
});
