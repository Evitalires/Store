
/* 
@param {Array} products
@return {number} totalPrice
*/
export const totalPrice = (products) => {
  let totalPrice = 0
  products.forEach(item => price += item.price * item.quantity)
  return totalPrice
} 
export const totalUnits = (products) => {
  let totalUnits = 0
  products.forEach(item => totalUnits += item.quantity)
  return totalUnits
} 

