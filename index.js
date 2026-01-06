const express = require('express');
const Datastore = require('nedb-promises');

const app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json( {limit: '1mb'} ));

const database = new Datastore({ filename: 'database.db', autoload: true });
database.insert({name: 'boy', body: 'hot'});
database.insert({name: 'boy', body: 'nothot'});

database.insert({ name: 'test' }, (err, newDoc) => {
    if (err) console.error('Insert error:', err);
    else console.log('Insert succeeded:', newDoc);
});

app.post('/api', (request, response) => {

    console.log(request.body);
    database.insert(request.body);

    response.json({
        status: 'success',
    });

})