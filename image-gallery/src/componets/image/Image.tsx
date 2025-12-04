import './Image.css'

function Image(props: { img: string, alt: string }) {
  return (
    <img src={props.img} alt={props.alt} />
  )
}

export default Image
