export default function ProductCart({ product }) {
  const { title, image, price } = product
  return (
    <article className="bg-white cursor-pointer flex justify-start items-center gap-2 rounded-lg shadow-sm w-full p-2 text-sm font-light">
      <figure className="relative pb-2 text-white">
        <img
          className="h-20 w-20 rounded-lg object-contain object-center border-2"
          src={image}
          alt="nature image"
        />
      </figure>
      <p className="w-2/3 h-full flex flex-col gap-2 py-2 border-2">
        <span className="truncate text-bold text-lg">{title}</span>
        <span> ${price} </span>
      </p>
    </article>
  )
}