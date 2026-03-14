const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const staticDir = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function serveStaticFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      sendJson(res, 404, { error: "Not found" });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const type = contentTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api/contact") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.socket.destroy();
      }
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body || "{}");
        if (!data.name || !data.email || !data.message) {
          sendJson(res, 400, { error: "All fields are required." });
          return;
        }

        sendJson(res, 200, { message: "Message received." });
      } catch (error) {
        sendJson(res, 400, { error: "Invalid JSON payload." });
      }
    });

    return;
  }

  const requestPath = req.url === "/" ? "/index.html" : req.url;
  const normalizedPath = path.normalize(requestPath).replace(/^\\+|^\/+/g, "");
  const filePath = path.join(staticDir, normalizedPath);

  if (!filePath.startsWith(staticDir)) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  serveStaticFile(res, filePath);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
