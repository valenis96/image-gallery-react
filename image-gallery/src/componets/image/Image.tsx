import type { ImageInfo } from '../../assets/models'
import './Image.css'

function Image(props: ImageInfo) {
  return (
    <img src={props.url} alt={props.alt} />
  )
}

export default Image
