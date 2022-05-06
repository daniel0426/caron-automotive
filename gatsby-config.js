module.exports = {
  siteMetadata: {
    title: `caron-automotive`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:500,600`,
          `source sans pro:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
};