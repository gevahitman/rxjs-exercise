const { fromHttpRequest } = require('../utils/http');
const {mergeAll, map, filter} = require('rxjs/operators');


fromHttpRequest('https://orels-moviedb.herokuapp.com/directors').pipe(
    mergeAll(),
    map(movie => { 
        if (movie.name[0].toLowerCase() === movie.name.split(' ')[0].slice(-1))
            return movie.name
        }),

    filter(name => {
        if (name !== undefined) 
            return name
    })
).subscribe(console.log)