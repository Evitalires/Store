import Product from "../Product"

export default function ListProducts({ items, type }) {
  return (
    <>
      {
        items?.map((item) => (
          <Product
            product={item}
            key={item.id}
            type={type}
          />
        ))
      }
    </>
  )
}