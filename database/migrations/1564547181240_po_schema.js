'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoSchema extends Schema {
  up () {
    this.create('pos', (table) => {
      table.increments()
      table.string('kd_trans', 5).notNullable().unique()
      table.string('tgl_trans', 256).notNullable()
      table.integer('kd_sup', 5).unsigned().references('id').inTable('supliers')
      table.integer('userId', 5).unsigned().references('id').inTable('users')
      table.integer('total_item').notNullable()
      table.integer('total_harga').notNullable()
      table.integer('discount').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pos')
  }
}

module.exports = PoSchema
