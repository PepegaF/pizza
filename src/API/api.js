import axios from 'axios';

export default class api {
   static async getPizzaItems(sort, category, search, pagination) {
      const response = await axios.get(`https://639cb95942e3ad69273a707b.mockapi.io/items?${pagination}&${sort}&${category}&${search}`)
      return response
   }
}