export default function ProductCart({ product }) {
  const { title, image, price, quantity } = product
  return (
    <article className="bg-white cursor-pointer flex flex-col gap-2 rounded-lg shadow-sm w-full p-2 text-sm font-light">
      <div className="flex h-min gap-2">
        <figure className="relative pb-2 text-white">
          <img
            className="h-12 w-12 rounded-lg object-contain object-center border-2"
            src={image}
            alt="nature image"
          />
        </figure>
        <div className="flex flex-col gap-2 w-3/4">
          <p className="text-bold text-sm border-2">
            {title}
          </p>
          <p className="flex gap-2 justify-around text-blue-600">
            <span>Delete</span>
            <span>Save</span>
          </p>
          <p className="flex gap-2 justify-around font-bold">
            <span>{quantity}u.</span>
            <span> ${quantity * price} </span>
          </p>
        </div>
      </div>
    </article>
  )
}