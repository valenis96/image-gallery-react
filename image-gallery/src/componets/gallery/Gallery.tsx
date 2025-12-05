import { imgs } from '../../assets/data'
import type { ImageInfo } from '../../assets/models'
import Image from '../image/Image'

function Gallery() {
  return (
    <div className='mb-[4em]'>
      <div className="grid grid-cols-[repeat(auto-fill,100px)] gap-[10px] justify-center lg:w-[700px]">
        {imgs.map((img: ImageInfo, index) => (
          <Image
            id={img.id}
            url={img.url}
            alt={img.alt}
            index={index}
          />
        ))}
      </div>
    </div>

  )
}

export default Gallery
