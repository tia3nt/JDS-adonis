'use strict'

class UpdateReport {
  get rules () {
    return {
      project_id: 'string',
    }
  }

  get messages() {
    return {
      string: '{{ field }} is not a valid string'
    }
  }

  get validateAll() {
    return true
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json(errorMessages)
  }
}

module.exports = UpdateReport
