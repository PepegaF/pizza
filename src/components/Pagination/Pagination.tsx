import React from 'react';
import s from './Pagination.module.scss'
import { getPagesArr } from './../../assets/getPagesArr';
import { useAppDispatch } from './../../hooks/hooks';
import { changeCurrentPage } from '../../redux/paginationReducer';
import { useCallback, useMemo } from 'react';

type paginationProps = {
   totalPages: number,
   currentPage: number
}

const Pagination: React.FC<paginationProps> = ({ totalPages, currentPage }) => {
   const dispatch = useAppDispatch()

   const paginationArr = useMemo(() => getPagesArr(totalPages), [totalPages])


   const changePage = (n: number) => {
      dispatch(changeCurrentPage(n))
   }
   return (
      <div className={s.pagination}>
         {paginationArr.map(n => <span key={n} onClick={() => changePage(n)} className={n === currentPage ? `${s.selectedPage} ${s.page}` : s.page}>{n}</span>)}
      </div>
   )
}
export default Pagination