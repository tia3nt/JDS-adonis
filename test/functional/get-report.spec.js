'use strict'

const Factory = use('Factory')

const { test, trait } = use('Test/Suite')('Get Report')

trait('Test/ApiClient')
trait('Auth/Client')

test('should render all records in table Report', async ({ assert, client }) => {
  
  const report = await Factory
    .model('App/Models/Report')
    .createMany(4)

  const response = await client
    .get('/all/report')
    .end()

  console.log('error', response.error)
  
  response.assertStatus(200)
  
  response.assertJSONSubset([
    { id: report[0].id, task: report[0].task },
    { id: report[1].id, task: report[1].task },
    { id: report[2].id, task: report[2].task },
    { id: report[3].id, task: report[3].task },
  ])
}).timeout(0);

test('should render specific records by id from Report table', 
  async ({ assert, client }) => {
      
    const reports = await Factory
      .model('App/Models/Report')
      .createMany(4)

    const report = reports[0]

    const response = await client
      .get(`/report/${report.id}`)
      .end()

    console.log('error', response.error)
  
    response.assertStatus(200)
    response.assertJSONSubset({
      id: report.id,
      task: report.task,
      category: report.category,
    })
}).timeout(0);
