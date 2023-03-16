const Hapi = require('@hapi/hapi');

const init = async () => {

const contacts = [{

}]    
    
    const server = Hapi.server ({
        port: 3000,
        host: '0.0.0.0'
    });

    await server.start();
    console.log('Server running on $s', server.info.uri);
}

    server.route({
        method: 'GET',
        path: '/contact',
        handler: (request, h) => {
            return contacts;
        }
    });

    server.route({
        method: 'GET',
        path: '/contact/{id}',
        handler: (request, h) => {
            const contact = contacts.find(b => b.id === parseInt(request.params.id));
            if (!contact) {
                return h.response('Book not found').code(404);
            }
            return contact;
        }
    });

    server.route({
        method: 'POST',
        path: '/contact',
        handler: (request, h) => {
            const book = {
                id: contacts.length + 1,
                title: request.payload.title,
                author: request.payload.author
            };
            contacts.push(contact);
            return contact;
        }
    });

    server.route({
        method: 'DELETE',
        path: '/contact/{id}',
        handler: (request, h) => {
            const contactIndex = contacts.findIndex(b => b.id === parseInt(request.params.id));
            if (contactIndex === -1) {
                return h.response('Book not found').code(404);
            }
            contacts.splice(bookIndex, 1);
            return h.response().code(204);
        }
    });

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
