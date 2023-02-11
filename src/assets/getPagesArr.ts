export const getPagesArr = (totalPages: number): number[] => {
   const paginationArr = []
   for (let i = 1; i <= totalPages; i++) paginationArr.push(i)
   return paginationArr
}