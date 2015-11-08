var Browser = require('zombie');

Browser.localhost(process.env.IP, process.env.PORT);

describe('User visits index page', function() {
    var browser = new Browser();
    
    before(function() {
        return browser.visit('/');
    });
    
    it('should be successful', function() {
        browser.assert.success();
    });
    
    it('should see welcome page', function() {
        browser.assert.text('div.page-header > h1', 'Családi TODO');
    });
    
});

describe('User visits new todo page', function (argument) {
    this.timeout(5000);
    var browser = new Browser();
    
    before(function() {
        return browser.visit('/todos/new');
    });
    
    it('should go to the authentication page', function () {
        browser.assert.redirected();
        browser.assert.success();
        browser.assert.url({ pathname: '/login' });
    });
    
    it('should be able to login with correct credentials', function (done) {
        browser
            .fill('name', 'pisti')
            .fill('password', 'jelszo')
            .pressButton('button[type=submit]')
            .then(function () {
                browser.assert.redirected();
                browser.assert.success();
                browser.assert.url({ pathname: '/todos/list' });
                done();
            });
    });
    
    it('should go the todo page', function () {
    return browser.visit('/todos/new')
    .then(function () {
        browser.assert.success();
        browser.assert.text('div.page-header > h1', 'Új feladat hozzáadása');
    });
});

it('should show errors if the form fields are not right', function () {
    return browser
        .fill('feladat', '')
        .fill('leiras', '')
        .pressButton('button[type=submit]')
        .then(function() {
            browser.assert.redirected();
            browser.assert.success();
            browser.assert.element('form .form-group:nth-child(1) [name=feladat]');
            browser.assert.hasClass('form .form-group:nth-child(1)', 'has-error');
        });
});
    
    it('should show submit the right-filled form fields and go back to list page', function() {
    browser
        .fill('feladat', 'bevasarlas')
        .fill('leiras', 'kenyer')
        .pressButton('button[type=submit]')
        .then(function() {
            browser.assert.redirected();
            browser.assert.success();
            browser.assert.url({ pathname: '/todos/list' });
            
            browser.assert.element('table.table');
            browser.assert.text('table.table tbody tr:last-child td:nth-child(2) span.label', 'Új');    
            browser.assert.text('table.table tbody tr:last-child td:nth-child(3)', 'bevasaras');    
            browser.assert.text('table.table tbody tr:last-child td:nth-child(4)', '0 kenyer');
        });
    });
    
    
});