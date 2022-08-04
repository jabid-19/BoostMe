const imageLoader = ({ src, width, quality }) => {
  // return `http://localhost:3000/${src}?w=${width}&q=${quality || 80}}`
  return `http://3.249.53.40/${src}?w=${width}&q=${quality || 80}}`
}
export default imageLoader
