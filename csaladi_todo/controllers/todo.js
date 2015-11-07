var express = require('express');
var router = express.Router();

var statusTexts = {
    'pending': 'Folyamatban',
    'complete': 'Teljesítve',
};

var statusClasses = {
    'pending': 'warning',
    'complete': 'success',
};

function decorateTodos(todoContainer) {
    return todoContainer.map(function (e) {
        e.statusText = statusTexts[e.status];
        e.statusClass = statusClasses[e.status];
        return e;
    });
}

router.get('/list', function (req, res) {
    req.app.models.todo.find().then(function (todos) {
        //megjelenítés
        res.render('todos/list', {
            todos: decorateTodos(todos),
            messages: req.flash('info'),
        });
    });
});

router.get('/new', function (req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('todos/new', {
        validationErrors: validationErrors,
        data: data,
    });
});

router.post('/new', function (req, res) {
    // adatok ellenőrzése
    req.checkBody('feladat', 'Hibás feladat').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('leiras').escape();
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/todos/new');
    }
    else {
        // adatok elmentése (ld. később) és a hibalista megjelenítése
        req.app.models.todo.create({
            status: req.body.allapot,
            assignment: req.body.feladat,
            description: req.body.leiras
        })
        .then(function (todo) {
            req.flash('info', 'Feladat sikeresen felvéve!');
            res.redirect('/todos/list');
        })
        .catch(function (err) {
            console.log(err);
        });
    }
});

router.get('/edit/:id', function(req, res) {
   var id = req.params.id;
   
   req.app.models.todo.findOne( {id: id} ).exec(function (err, data) {
       console.log('id: ', id);
       console.log('Editing >', data);
       res.render('todos/new', {
           data:data
       });
    });
});

router.post('/edit/:id', function(req, res) {
    var id = req.params.id;
    console.log('received: ', req.body);
    req.app.models.todo.update(
        {id: req.params.id}, {description:req.body.leiras, status: req.body.allapot})
        .exec(function (err, data) { 
            res.redirect('/todos/list'); 
    }); 
});

router.get('/delete/:id', function(req, res) {
    req.app.models.todo.destroy( {id: req.params.id} ).then(function (data) {
        req.flash('info', 'Feladat törölve');
        res.redirect('/todos/list');
    });
});

module.exports = router;