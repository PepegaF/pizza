export const getTotalPrice = (cartPizzas) => cartPizzas.reduce((sum, obj) => {
   return sum + (obj.price * obj.count)
}, 0)