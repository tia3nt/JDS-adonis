'use strict'

const Factory = use('Factory')

const { test, trait } = use('Test/Suite')('Put Report')

trait('Test/ApiClient')
trait('Auth/Client')

test('user should able to update his/ hers Report', 
async ({ assert, client }) => {
  
  const user = await Factory.model('App/Models/User').create()
  const report = await Factory.model('App/Models/Report').make()

  await user.reports().save(report)

  const data = {
    divisi_id: 'div002',
    category: 'WFO',
  }

  const response = await client
    .put(`/update/report/${report.id}`)
    .loginVia(user, 'jwt')
    .send(data)
    .end()

  console.log('error', response.error)

  response.assertStatus(200)
  response.assertJSONSubset({
    id: report.id,
    category: data.category,
    divisi_id: data.divisi_id,
  })

}).timeout(0);
