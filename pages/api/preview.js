import { getAllWorkWithSlug, getPreviewWorkBySlug } from './helpers'

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const work = await getPreviewWorkBySlug(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!work) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched work
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/work/${work.slug}` })
  res.end()
}