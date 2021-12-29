import * as fs from 'fs'
import { getAllProjectsIds } from '../lib/projects'
const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://lenaebner.com'

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        'projects',
        '404.js',
        'sitemap.xml.js',
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`
    })
  const allProjects = getAllProjectsIds()

  const dynamicPaths = allProjects.map(({ params: { id } }) => {
    return `${BASE_URL}/projects/${id}`
  })
  const allPaths = [...staticPaths, ...dynamicPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
