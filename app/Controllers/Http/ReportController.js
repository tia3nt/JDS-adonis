'use strict'

const Report = use('App/Models/Report')

class ReportController {
  async store({ request, response, auth }) {
    const user = await auth.getUser()

    const report
     = await Report.create({
      ...request.only([
        'divisi_id', 
        'project_id', 
        'task', 
        'category', 
        'place', 
        'task_date', 
        'link']),
      user_id: user.id,
    })
  
    return response.created(report)
  }

  async all ({ request, response }) {
        
    const report = await Report.all()
        
    return response.ok(report)
  }

  async show ({ response, params }) {
    
    const report = await Report.find(params.id)

    return response.ok(report)
  }
}



module.exports = ReportController
