const fastify = require("fastify")({
  logger: true,
});

// Register the CORS plugin
fastify.register(require("@fastify/cors"), {
  origin: ["http://localhost:5173", "http://localhost"], // Allow your Vue app's domain
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type"], // Allowed request headers
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
