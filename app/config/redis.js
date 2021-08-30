let redis = require("redis");
let client = redis.createClient();

client.on("error", (error) => {
  console.log(`400 client${error}`);
});

module.exports = client;
