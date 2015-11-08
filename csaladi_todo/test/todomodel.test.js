/*
var expect = require("chai").expect;
var bcrypt = require('bcryptjs');

var Waterline = require('waterline');
var waterlineConfig = require('../config/waterline');
var userCollection = require('../models/user');
var todoCollection = require('../models/todo');

var Todo;

function getTodoData() {
    return {
        status: 'pending',
        assignment: 'feladat',
        description: 'asdfg',
    };
}

before(function (done) {
    // ORM indítása
    var orm = new Waterline();

    orm.loadCollection(Waterline.Collection.extend(userCollection));
    orm.loadCollection(Waterline.Collection.extend(todoCollection));
    waterlineConfig.connections.default.adapter = 'memory';

    orm.initialize(waterlineConfig, function(err, models) {
        if(err) throw err;
        Todo = models.collections.todo;
        done();
    });
});

describe('TodoModel', function () {

    beforeEach(function (done) {
        Todo.destroy({}, function (err) {
            done();
        });
    });
    
        it('should work', function () {
            expect(true).to.be.true;
        });
        
    it('should be able to create a todo', function () {
        return Todo.create({
            status: 'pending',
            assignment: 'feladat',
            description: 'asdfg',
        })
        .then(function (todo) {
            expect(todo.status).to.equal('pending');
            expect(todo.assignment).to.equal('feladat');
            expect(todo.description).to.equal('asdfg');
        });
    });
    
    it('should be able to find a todo', function() {
        return Todo.create(getTodoData())
        .then(function(todo) {
            return Todo.findOneByAssignment(todo.assignment);
        })
        .then(function (todo) {
            expect(todo.status).to.equal('pending');
            expect(todo.assignment).to.equal('feladat');
            expect(todo.description).to.equal('asdfg');
        });
    });

    [
        {name: 'status', value: ''},
        {name: 'assignemnt', value: ''},
        {name: 'description', value: ''},
    ].forEach(function (attr) {
        it('should throw error for invalid data: ' + attr.name, function () {
            var todoData = getTodoData();
    
            todoData[attr.name] = attr.value;
            
            expect(Todo.create(todoData)).to.throw;
        });    
    });

});

*/