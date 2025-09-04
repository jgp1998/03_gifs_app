
import { GiftList } from "./gifs/components/GiftList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
export const GifsApp = () => {
    const {
        handleSearch,
        previousTerms,
        handleTermClicked,
        gifs
    } = useGifs();


    return (
        <>
            <CustomHeader
                title="Buscador de Gifs"
                description="Encuentra los mejores gifs aquí"
            />
            {/* SearchBar */}
            <SearchBar
                placeholder="Busca un gif..."
                btnText="Buscar"
                onQuery={handleSearch}
            />
            {/* Busquedas previas */}
            <PreviousSearch
                onLabelClicked={(term) => handleTermClicked(term)}
                subtitle="Busquedas Previas"
                searches={previousTerms}
            />
            <GiftList
                gifs={gifs}
            />
        </>
    )
}
