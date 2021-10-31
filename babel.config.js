module.exports = {
  presets: ["blitz/babel"],
  plugins: [
    [
      "formatjs",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        ast: true,
      },
    ],
  ],
}
