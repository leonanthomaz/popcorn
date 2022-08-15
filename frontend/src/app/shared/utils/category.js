import { 
    API_TRENDING,
    API_DOCUMENTARY,
    API_ROMANCE,
    API_TOP,
    API_ACTION, 
    API_COMEDY, 
    API_HORROR 
} from '../services/api/ApiTMDB'

export const category = [
    {
        fetch: 'TRENDING',
        url: API_TRENDING,
        title: 'Trendings',
    },
    {
        fetch: 'TOP',
        url: API_TOP,
        title: 'Top',
    },
    {
        fetch: 'ACTION',
        url: API_ACTION,
        title: 'Ação',
        code: 28
    },
    {
        fetch: 'COMEDY',
        url: API_COMEDY,
        title: 'Comédia',
        code: 35
    },
    {
        fetch: 'HORROR',
        url: API_HORROR,
        title: 'Terror',
        code: 27
    },
    {
        fetch: 'DOCUMENTARY',
        url: API_DOCUMENTARY,
        title: 'Documentário',
        code: 99
    },
    {
        fetch: 'ROMANCE',
        url: API_ROMANCE,
        title: 'Romance',
        code: 10749
    },
]  