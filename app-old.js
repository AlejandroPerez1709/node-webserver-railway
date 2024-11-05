const http = require('http');

//Descargar un archivo de Excel
// http.createServer( (req, res) => {

//     res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
//     res.writeHead(200, {'content-type': 'application/csv'});

//     res.write('ID, Nombre\n');
//     res.write('1, Alex\n');
//     res.write('2, Peter\n');
//     res.write('3, Juan\n');
//     res.write('4, Amanda\n');
//     res.end();
// })
// .listen(8080);


http.createServer( (req, res) => {
    
    // res.writeHead(200, {'content-type': 'text/plain'})
    res.writeHead(200, {'content-type': 'application/json'});
    
    const persona = {
        id:1,
        nombre: 'Alex Ram'
    }
    
    
    res.write(JSON.stringify(persona))
    res.end();
})
.listen(8080);


console.log('Escuchando en puerto ', 8080);