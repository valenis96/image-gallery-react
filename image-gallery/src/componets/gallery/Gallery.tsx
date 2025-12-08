import { useState } from 'react';
import { imgs } from '../../assets/data'
import type { ImageInfo } from '../../assets/models'
import Image from '../image/Image'

function Gallery() {
  const [images, setItems] = useState<ImageInfo[]>(imgs);

  const deleteImage = (id: string) => {
    setItems(prevImages => prevImages.filter(image => image.id !== id));
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
