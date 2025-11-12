// client.js
// JavaScript SDK client for Meshy-like API

export default class MeshyClient {
  constructor(baseUrl = "http://localhost:5000", debug = false) {
    this.baseUrl = baseUrl;
    this.debug = debug; // Boolean flag: enable debug logging
  }

  async generateModel(prompt) {
    if (this.debug) console.log("[DEBUG] Sending prompt:", prompt);
    const resp = await fetch(`${this.baseUrl}/v1/models/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    return await resp.json();
  }

  async getJobStatus(jobId) {
    if (this.debug) console.log("[DEBUG] Checking job status:", jobId);
    const resp = await fetch(`${this.baseUrl}/v1/jobs/${jobId}`);
    return await resp.json();
  }

  async getAsset(assetId) {
    if (this.debug) console.log("[DEBUG] Retrieving asset:", assetId);
    const resp = await fetch(`${this.baseUrl}/v1/assets/${assetId}`);
    return await resp.json();
  }
}
