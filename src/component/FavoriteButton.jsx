import { useDispatch, useSelector } from "react-redux"
import { favoriteSlice } from "../RTK/slice"

export default function FavoriteButton({pokemonId}){
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch()

    return (
        //조건부로 하트 빨간색으로 만드는고..
        <button 
        onClick={(e) => {
            e.stopPropagation() //이벤트 버블링을 막아준다. 하트 클릭시 카드가 눌려서 디테일 페이지로 넘어가는 것을 막아줌
        dispatch(isFavorite ? favoriteSlice.actions.removeFromFavorite({pokemonId}) : favoriteSlice.actions.addToFavorite({pokemonId})) // 객체로 감싸서 넣어줘야 한다. 
        }} className={isFavorite ? "text-[red]": ''}>
         {isFavorite ? '♥' : '♡' }
        </button>
    )
}