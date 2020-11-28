const { fromHttpRequest } = require('../utils/http');
const {mergeAll, first} = require('rxjs/operators');

fromHttpRequest('https://orels-moviedb.herokuapp.com/directors').pipe(
    mergeAll(),
    first()
).subscribe(console.log)