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
        uri: "http://localhost:8888/.netlify/functions/newLolly",
      },
    },
  ],
};
