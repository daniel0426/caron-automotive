import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";

const SEO = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);
  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="description" content="The Best Garage in Tauranga" />
      <meta property="og:site_name" content="Caron Automotive" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://caron.co.nz" />

      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
