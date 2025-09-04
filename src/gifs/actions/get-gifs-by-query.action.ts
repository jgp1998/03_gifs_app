import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import giphyApi from "../api/giphy.api";

export const getGifsByQuery = async (query: string, limit: number = 10, offset: number = 0): Promise<Gif[]> => {
    const response = await giphyApi.get<GiphyResponse>(
        '/search',
        {
            params: {
                q: query,
                limit: limit,
                offset: offset,
                rating: 'g',
                bundle: 'messaging_non_clips'
            }
        });
    console.log(response.data);

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
}