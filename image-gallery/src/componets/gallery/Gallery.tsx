import { imgs } from '../../assets/data'
import Image from '../image/Image'
import './Gallery.css'

function Gallery() {
  return (
    <div className='container'>
      <div className="gallery">
        {imgs.map((img) => (
          <Image img={img.url} alt={img.alt} />
        ))}
      </div>
    </div>

  )
}

export default Gallery
