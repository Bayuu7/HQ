// client.js (update dengan auth)

export default class MeshyClient {
  constructor(baseUrl = "http://localhost:5000", debug = false) {
    this.baseUrl = baseUrl;
    this.debug = debug;
    this.token = null;
  }

  async login(userId = "guest") {
    const resp = await fetch(`${this.baseUrl}/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    });
    const data = await resp.json();
    this.token = data.token;
    if (this.debug) console.log("[DEBUG] Logged in, token:", this.token);
    return this.token;
  }

  _headers() {
    if (!this.token) throw new Error("Not authenticated. Call login() first.");
    return { Authorization: `Bearer ${this.token}` };
  }

  async generateModel(prompt) {
    if (this.debug) console.log("[DEBUG] Sending prompt:", prompt);
    const resp = await fetch(`${this.baseUrl}/v1/models/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...this._headers() },
      body: JSON.stringify({ prompt }),
    });
    return await resp.json();
  }
}
