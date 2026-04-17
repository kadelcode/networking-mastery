const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello, Networking World!\n");
});

// Error handler
server.on("error", (err) => {
    console.error("Server error:", err.message);

    if (err.code == "EADDINUSE") {
        console.error("Port 8080 is already in use.")
    }

    process.exit(1); // exit gracefully
})

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});