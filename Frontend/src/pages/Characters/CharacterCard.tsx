import { Page } from "../../models/classes/AllType"

export const CharacterCard = ({character}: {character: Page}) => {
    return (
        <section className="flex justify-center align-center border max-full">
            <section className="border-[#f4e911]  h-[21em] flex flex-col bg-[#e63894] rounded-2xl max-full">
            <h1 className="text-2xl font-serif">{character.label}</h1>
            <section className="border-[#f4e911] border-2 flex justify-center align-center">
               <img className="w-[17em]" src={character.imgUrl} alt="" />
            </section>
            <section className=" flex justify-center align-center">
                <span>Portrayed by  {character.actor}</span>
            </section>
            </section>

        </section>
    )
}