/*
Hooks: data
After extracting this data, it passes the parameters and other sources.
*/

export const request = [{
        genre: "Animation",
        URL: "with_genres=16&include_adult=false&",
    },
    {
        genre: "Action",
        URL: "with_genres=28&include_adult=false&",
    },
    {
        genre: "Adventure",
        URL: "with_genres=12&include_adult=false&",
    },
    {
        genre: "Comedy",
        URL: "with_genres=35&include_adult=false&",
    },
    {
        genre: "Music",
        URL: "with_genres=10402&include_adult=false&",
    },
    {
        genre: "TV",
        URL: "with_genres=10770&include_adult=false&",
    },
    {
        genre: "Drama",
        URL: "with_genres=18&include_adult=false&",
    },
    {
        genre: "Family",
        URL: "with_genres=10751&include_adult=false&",
    },
    {
        genre: "Romance",
        URL: "with_genres=10749&include_adult=false&",
    },
    {
        genre: "Mystery",
        URL: "with_genres=9648&include_adult=false&",
    },
    {
        genre: "Horror",
        URL: "with_genres=27&include_adult=false&",
    },
    {
        genre: "Thriller",
        URL: "with_genres=53&include_adult=false&",
    },
    {
        genre: "Fantasy",
        URL: "with_genres=14&include_adult=false&",
    },
    {
        genre: "SF",
        URL: "with_genres=878&include_adult=false&",
    },
    {
        genre: "Documentary",
        URL: "with_genres=99&include_adult=false&",
    },
    {
        genre: "Crime",
        URL: "with_genres=80&include_adult=false&",
    },
    {
        genre: "War",
        URL: "with_genres=10752&include_adult=false&",
    },
    {
        genre: "History",
        URL: "with_genres=36&include_adult=false&",
    },
    {
        genre: "Western",
        URL: "with_genres=37&include_adult=false&",
    },
];

export const sortBy = {
    popular: "/discover/movie?sort_by=popularity.desc&",
    recent: "/movie/upcoming?",
    voted: "/discover/movie?sort_by=vote_count.desc&",
    revenue: "/discover/movie?sort_by=revenue.desc&",
};

// When it gets a genre ID, it will translate into English.
export const genreId = (item) => {
    switch (item) {
        case 35:
            return "Comedy";
        case 28:
            return "Action";
        case 12:
            return "Adventure";
        case 16:
            return "Animation";
        case 10402:
            return "Music";
        case 10770:
            return "TV-Movie";
        case 18:
            return "Drama";
        case 10751:
            return "Family";
        case 10749:
            return "Romance";
        case 9648:
            return "Mystery";
        case 27:
            return "Horror";
        case 53:
            return "Thriller";
        case 14:
            return "Fantasy";
        case 878:
            return "SF";
        case 99:
            return "Documentary";
        case 80:
            return "Crime";
        case 10752:
            return "War";
        case 36:
            return "History";
        case 37:
            return "Western";
        default:
            return "??";
    }
};

export const genreId_to_key = (item) => {
    switch (item) {
        case 35:
            return 3;
        case 28:
            return 1;
        case 12:
            return 2;
        case 16:
            return 0;
        case 10402:
            return 4;
        case 10770:
            return 5;
        case 18:
            return 6;
        case 10751:
            return 7;
        case 10749:
            return 8;
        case 9648:
            return 9;
        case 27:
            return 10;
        case 53:
            return 11;
        case 14:
            return 12;
        case 878:
            return 13;
        case 99:
            return 14;
        case 80:
            return 15;
        case 10752:
            return 16;
        case 36:
            return 17;
        case 37:
            return 18;
        default:
            return -1;
    }
};