import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.action";

import AxiosMockAdapter from "axios-mock-adapter";
import giphyApi from "../api/giphy.api";
import { giphySearchResponseMock } from "../../mock-data/giphy.response.data";


describe("getGifsByQueryAction", () => {
    let mock: AxiosMockAdapter;

    beforeEach(() => {
        mock = new AxiosMockAdapter(giphyApi);
    });

    afterEach(() => {
        mock.restore();
    });
    test("should return a list of gifs", async () => {
        mock.onGet("/search").reply(200, giphySearchResponseMock);

        const gifs = await getGifsByQuery("goku");
        expect(gifs.length).toBe(10);
        gifs.forEach(gif => {
            expect(typeof gif.id).toBe("string");
            expect(typeof gif.title).toBe("string");
            expect(typeof gif.url).toBe("string");
            expect(typeof gif.width).toBe("number");
            expect(typeof gif.height).toBe("number");
        })
    })

    test("should return an empty list of gifs if query is empty", async () => {
        mock.restore();
        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);
    })
    test('should handle error when the API returns an error', async () => {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad Request'
            }
        });

        const gifs = await getGifsByQuery('goku');

        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});