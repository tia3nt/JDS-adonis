'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route
  .post('users', 'UserController.store')
  .validator('User');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route
  .post('/new/report', 'ReportController.store')
  .validator('ReportController')
  .middleware(['auth']);

Route.get('/all/report', 'ReportController.all');

Route.get('report/:id', 'ReportController.show');

Route
  .put(`/update/report/:id`, 'ReportController.update')
  .validator('UpdateReport')
  .middleware(['auth']);

Route
  .delete(`/report/:id`, 'ReportController.destroy')
  .middleware(['auth']);
