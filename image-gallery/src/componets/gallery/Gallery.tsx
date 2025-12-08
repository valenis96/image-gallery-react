import { useState } from 'react';
import { imgs } from '../../assets/data'
import type { ImageInfo } from '../../assets/models'
import Image from '../image/Image'

function Gallery() {
  const [images, setImages] = useState<ImageInfo[]>(imgs);

  const deleteImage = (id: string) => {
    if (window.confirm('Are you sure to delete this image?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  return (
    <div className='mb-[4em]'>
      <div className="grid grid-cols-[repeat(auto-fill,100px)] gap-[10px] justify-center lg:w-[700px]">
        {images.map((img: ImageInfo, index) => (
          <Image
            key={img.id}
            id={img.id}
            url={img.url}
            alt={img.alt}
            index={index}
            onButtonClick={deleteImage}
          />
        ))}
      </div>
    </div>

  )
}

export default Gallery
