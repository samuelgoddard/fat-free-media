export async function getPreviewWorkBySlug(slug) {
  const data = await fetchAPI(
    `
    query WorkBySlug($slug: String) {
      work(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  )
  return data?.post
}