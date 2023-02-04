export type pizza = {
   id: number,
   imageUrl: string,
   title: string,
   type: string,
   size: number,
   price: number,
   count: number,
}
export interface pizzaCartState {
   totalPrice: number,
   cartPizzas: pizza[]
}

///////////////////////////////

export type getPizzas = Record<string, string>

export type pizzaItem = {
   id: number,
   imageUrl: string,
   title: string,
   types: number[],
   sizes: number[],
   price: number,
   count: number,
   category: number,
   rating: number
}

export interface paginationState {
   currentPage: number,
   perPage: number,
   totalCount: number,
   pizzaItems: pizzaItem[],
   isLoading: boolean | null
}

///////////////////////////////

export interface pizzaSelectionState {
   sortType: string,
   categoriesType: number,
   searching: string,
   currentPage?: number
}

