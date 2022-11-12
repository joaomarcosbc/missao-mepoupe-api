module.exports = {
  apps: [
    {
      name: "apimepupoe",
      script: "dist/server.js",
      watch: true,
      ignore_watch: ["node_modules", "storage"],
    },
  ],
};
