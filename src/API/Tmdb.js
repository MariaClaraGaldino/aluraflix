const API_KEY = process.env.REACT_APP_ACESSO_KEY;

const API_BASE = 'https://api.themoviedb.org/3'

const basciFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais',
                items: await basciFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basciFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basciFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basciFecth(`/discover/movie?with_genrs=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basciFecth(`/discover/movie?with_genrs=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basciFecth(`/discover/movie?with_genrs=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basciFecth(`/discover/movie?with_genrs=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basciFecth(`/discover/movie?with_genrs=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basciFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basciFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }


        return info;
    }
}