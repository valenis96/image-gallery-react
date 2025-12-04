import type { ImageProps } from '../../assets/models'

function Image(props: ImageProps) {
  return (
    <img
      src={props.url}
      alt={props.alt}
      className={
        props.index === 0
          ? "col-span-3 row-span-3 w-[320px] h-[320px] object-cover object-center"
          : "w-[100px] h-[100px] object-cover object-center"
      } />
  )
}

export default Image
