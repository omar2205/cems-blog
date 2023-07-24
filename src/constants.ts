const getBackendUrl = () => {
  const url = process.env.BACKEND_URL
  if (!url) throw new Error('BACKEND_URL env is missing')
  return url
}
export const BACKEND_URL = getBackendUrl()
