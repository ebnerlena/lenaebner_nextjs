import fs from 'fs'
import path from 'path'

const photosDirectory = path.join(process.cwd(), 'public/images/photography')

export function getAllPhotosData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(photosDirectory)
  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const name = fileName.replace(/\.jpg$/, '')

    // Combine the data with the id
    return {
      name,
      fileName,
    }
  })
}

export async function getProjectPhoto(name) {
  const fullPath = path.join(photosDirectory, `${name}.jpg`)

  return {
    name,
    fullPath,
  }
}
