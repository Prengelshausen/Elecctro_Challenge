const Hapi = require('@hapi/hapi');
const db = require('./db/connect')

async function getTodos() {
    return db('todos').select().then(await function(data) {
            console.log(data);
            return data;
        })
}

async function postTodos(body) {
    return db('todos').insert(body).returning('*').then(await function(data) {
            console.log(body);
            return data;
          })
}

async function delTodo(id) {
    return await db('todos').where('id', id).del();
}

async function updTodo(id, body) {
    return db('todos').where({id: id, state: false}).update('description', body).then(await function(data) {
        console.log(body);
        return data;
      })
}

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route([{
        method: 'GET',
        path:'/todos',
        handler: getTodos
    },

    {
        method: 'DELETE',
        path:'/todos/{id}',
        handler: async function(request,h) {
            return await delTodo(parseInt(request.params.id));
        }
    },
    
    {
        method: 'POST',
        path:'/todos',
        handler: async function(request,h) {
            return await postTodos(request.payload)
        }
    },

    {
        method: 'PATCH',
        path:'/todos/{id}',
        handler: async function(request,h) {
            return await updTodo(request.params.id, request.payload)
        } 
    }

    ]);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

init();