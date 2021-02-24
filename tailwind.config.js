const isProd = process.env["npm_lifecycle_event"] === "build" // Watch👀 https://github.com/parcel-bundler/parcel/issues/4503

module.exports = {
  purge: {
    enabled: isProd,
    content: [
      './src/**/*.pug'
    ]
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}