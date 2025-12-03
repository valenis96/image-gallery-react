import reactLogo from '../../assets/react.svg'
import './Gallery.css'

function Image() {
  return (
    <img src={reactLogo} className="logo react" alt="React logo" />
  )
}

function Gallery() {
  return (
    <div className="gallery">
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  )
}

export default Gallery
