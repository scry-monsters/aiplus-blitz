import { BlitzConfig, sessionMiddleware, simpleRolesIsAuthorized } from "blitz"

const config: BlitzConfig = {
  middleware: [
    sessionMiddleware({
      cookiePrefix: "aiplus-blitz",
      isAuthorized: simpleRolesIsAuthorized,
    }),
  ],
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "p4.wallpaperbetter.com",
      "aiplus.kz",
      "cdn.filestackcontent.com",
      "i.pinimg.com",
    ],
  },
  i18n: {
    locales: ["ru", "kz"],
    defaultLocale: "ru",
  },
  // // /* Uncomment this to customize the webpack config
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Note: we provide webpack above so you should not `require` it
  //   // Perform customizations to webpack config
  //   // Important: return the modified config
  //   return config
  // },
}
module.exports = config
