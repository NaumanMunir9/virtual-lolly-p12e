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
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Lolly",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "lolly",
        // Url to query from
        url: "https:localhost:8888/.netlify/functions/newLolly",
      },
    },
  ],
};
