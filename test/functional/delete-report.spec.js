'use strict'

const Factory = use('Factory')

const { test, trait } = use('Test/Suite')('Delete Report')

trait('Test/ApiClient')
trait('Auth/Client')

test('a user should able to delete owned report', 
  async ({ assert, client }) => {

    const user = await Factory.model('App/Models/User').create()
    
    const report = await Factory
      .model('App/Models/Report')
      .make()

    await user.reports().save(report)

    const response = await client
      .delete(`/report/${report.id}`)
      .loginVia(user, 'jwt')
      .end()

    console.log('error', response.error)

    response.assertStatus(204)

}).timeout(0);
