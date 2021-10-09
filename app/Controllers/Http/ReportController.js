'use strict'

const Report = use('App/Models/Report')

class ReportController {
    async store({ request, response, auth }) {
        const user = await auth.getUser()

        const report = await Report.create({
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
}

module.exports = ReportController
