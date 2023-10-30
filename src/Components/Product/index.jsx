export default function Product({ id, title, description, image, price, category }) {
  const buyItem = (e) => {
    console.log(e.target);
  }
  return (
    <article className="bg-white cursor-pointer flex flex-col justify-start items-center gap-2 rounded-lg shadow-sm w-48 h-96 p-4 text-sm font-light">
      <figure className="relative pb-2 text-white">
        <img
          className="h-48 w-full rounded-lg object-contain object-center border-2"
          src={image}
          alt="nature image"
        />
        <span className="absolute top-2 right-1 p-1 px-2 rounded-lg bg-black/70 text-xs">{category}</span>
        <button onClick={buyItem} className="absolute -bottom-2 inset-x-1/4 text-large w-20 bg-black" >Buy</button>
      </figure>
      <p className="w-full flex flex-col gap-2 py-2">
        <span className="truncate text-bold text-lg">{title}</span>
        <span className="truncate"> {description} </span>
      </p>
      <p className="text-lg font-bold border-t-2 border-black/30 w-full">
        <span>$ {price}</span>
      </p>
    </article>
  )
}