import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"

export default function Detail() {

    const { pokemonId } = useParams()
    // console.log(typeof pokemonId)
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
    // console.log(pokemon)
    return (
        <div className="flex flex-col justify-center items-center border border-[gray] p-[30px] rounded-[10px]">
            <div className="text-[28px] mb-[10px]">{pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
            <img className="w-[200px]" src={pokemon.front}  />
        </div>
    )
}