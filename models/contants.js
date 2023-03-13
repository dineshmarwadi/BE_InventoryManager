const constants = {
  corsOpts: {
    origin: "*",
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["Content-Type"],
  },
  mongoUrl:
    "mongodb+srv://admin:admin1234@cluster0.d1fhcnw.mongodb.net/?retryWrites=true&w=majority",
};

module.exports = constants;
