require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Caron Automotive`,
    description: "Tauranga's best automotive",
    keywords : "automotive, car repair, tauranga, garage, ",
    siteUrl: `http://caron.co.nz`,
    image: `src/images/nav/logo.png`
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
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "caron.co.nz",
        region: "ap-southeast-2"
      },
    },
  ]
};