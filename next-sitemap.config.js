// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://codehumanizer.vercel.app', // Replace with your domain
  generateRobotsTxt: true,      // (Optional but recommended)
  sitemapSize: 7000,            // (Optional) Number of URLs per sitemap file
};
