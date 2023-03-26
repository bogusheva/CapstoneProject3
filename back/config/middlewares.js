module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

module.exports.settings = {
  cors: {
    enabled: true,
    origin: ["https://the-teath-avenue.netlify.app", "http://localhost:3000"],
  },
};
