const env = process.env.NODE_ENV.trim();

module.exports = {
  environment: env,
  isProduction: env === "production",
  port: env === "production" ? 8080 : 3000
};
