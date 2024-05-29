const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/ContactForm', changefreq: 'monthly', priority: 0.7 }
];

// Path to save the sitemap
const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');
console.log(`Generating sitemap at: ${sitemapPath}`);

// Create a stream to write to the sitemap file
const sitemap = new SitemapStream({ hostname: 'https://erpcustomization.net/' });
const writeStream = createWriteStream(sitemapPath);

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Add each route to the sitemap
routes.forEach(route => {
  console.log(`Adding route: ${route.url}`);
  sitemap.write(route);
});

// End the sitemap stream
sitemap.end();

// Handle write stream finish event
writeStream.on('finish', () => {
  console.log('Sitemap created successfully!');
});

// Handle write stream error event
writeStream.on('error', (error) => {
  console.error('Error creating sitemap:', error);
});
