module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "https://virtual-lolly-p12e-mnm.netlify.app/.netlify/functions/newLolly",
      },
    },
  ],
};
