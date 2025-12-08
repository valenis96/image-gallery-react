import type { ImageProps } from '../../assets/models'

function Image(props: ImageProps) {
  const classesGrid = props.index === 0
    ? "col-span-3 row-span-3 w-[320px] h-[320px] object-cover object-center relative"
    : "w-[100px] h-[100px] object-cover object-center relative"



  return (
    <>
      <span data-testid="image" className={`relative ${classesGrid} group`}>
        <button className='invisible absolute top-[5px] right-[8px] bg-white 
          px-[6px] rounded-full cursor-pointer group-hover:visible'
          onClick={() => props.onButtonClick(props.id)}
          data-testid="delete">
          X
        </button>

        <img
          src={props.url}
          alt={props.alt}
          tabIndex={0} />
      </span >
    </>
  )
}

export default Image
