module.exports = {
    identity: 'todo',
    connection: 'default',
    attributes:{ 
        date: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },
            required: true,
        },
        status: {
            type: 'string',
            enum: ['pending', 'complete'],
            required: true,
        },
        assignment: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        user: {
            model: 'user',
        },
    }
};