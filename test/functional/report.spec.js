'use strict'

const Factory = use('Factory')
const { test, trait } = use('Test/Suite')('Report')

trait('Test/ApiClient')
trait('Auth/Client')

test('create report when given valid data', async ({ assert, client }) => {
  
  const user = await Factory.model('App/Models/User').create()
  
  const data = {
    divisi_id: 'div001',
    project_id: 'prj001',
    task: 'JDS daily report',
    category: 'WFH',
    place: 'jds-park',
    task_date: '2021/10/01',
    link: 'http://attachment.co.id'
  }

  const response = await client
      .post('/new/report')
      .loginVia(user, 'jwt')
      .send(data)
      .end()

      console.log('error', response.error)
      
      response.assertStatus(201)
      response.assertJSONSubset({
          divisi_id: data.divisi_id,
          project_id: data.project_id,
          category: data.category,
          place: data.place,
          task_date: data.task_date,
          link: data.link,
          user_id: user.id,
      })
}).timeout(0);

test('should reject request if no project_id', async ({
  assert,
  client,
}) => {

  const user = await Factory.model('App/Models/User').create()
  
  const { 
    divisi_id,
    task,
    category,
    place,
    task_date,
    link,
  } = await Factory.model(
        'App/Models/Report'
    ).make()

  const data = {
    divisi_id,
    task,
    category,
    place,
    task_date,
    link,
  }

  const response = await client
      .post('/new/report')
      .loginVia(user, 'jwt')
      .send(data)
      .end()

  console.log('error', response.error)

  response.assertStatus(400)
  response.assertJSONSubset([
    {
        message: 'project_id is missing',
        field: 'project_id',
        validation: 'required',
    },
  ])
}).timeout(0);
