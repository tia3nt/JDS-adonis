'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportSchema extends Schema {
  up () {
    this.create('reports', (table) => {
      table.increments()
      table.string('divisi_id', 6)
      table.string('project_id', 6)
      table.string('task', 200)
      table.string('category', 50)
      table.string('place', 200)
      table.date('task_date')
      table.text('link')
      table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('reports')
  }
}

module.exports = ReportSchema
