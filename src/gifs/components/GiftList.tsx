import type { Gif } from "../interfaces/gif.interface";

interface GiftListProps {
    gifs: Gif[];
}
export const GiftList = ({ gifs }: GiftListProps) => {
    return (
        <div className="gifs-container">
            {
                gifs.map(gif => (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width} x {gif.height} (1.5mb)</p>
                    </div>
                ))
            }
        </div>
    )
}