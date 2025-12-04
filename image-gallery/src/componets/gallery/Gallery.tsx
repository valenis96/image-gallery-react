import { imgs } from '../../assets/data'
import type { ImageInfo } from '../../assets/models'
import Image from '../image/Image'
import './Gallery.css'

function Gallery() {
  return (
    <div className='container'>
      <div className="gallery">
        {imgs.map((img: ImageInfo) => (
          <Image
            id={img.id}
            url={img.url}
            alt={img.alt}
          />
        ))}
      </div>
    </div>

  )
}

export default Gallery
