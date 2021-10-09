'use strict'

class ReportController {
  get rules () {
    return {
      project_id: 'required|string',
    }
  }
  get messages() {
    return {
      required: '{{ field }} is missing',
      string: '{{ field }} is not a validstring',
    }
  }
  get validateAll() {
    return true
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json(errorMessages)
  }
}

module.exports = ReportController
