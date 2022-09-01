module.exports = {
  siteMetadata: {
    title: `Eso es como todo`,
    description: `Podcast de entretenimiento. Cada quince días hablamos de un tema diferente, desde una perspectiva divertida, ácida, absurda y mordaz.`,
    author: `Daniel Calderón, Jose A. Pérez, Abel Sutilo`,
    twitterUsername: `@EsoEsComoToders`,
    siteUrl: `https://esoescomotodo.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e5a907`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#e5a907`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
