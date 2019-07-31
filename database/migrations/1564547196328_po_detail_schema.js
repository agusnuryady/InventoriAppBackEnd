'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoDetailSchema extends Schema {
  up () {
    this.create('po_details', (table) => {
      table.increments()
      table.integer('kd_trans', 5).unsigned().references('id').inTable('pos')
      table.integer('kd_brg', 5).unsigned().references('id').inTable('barangs')
      table.integer('qty').notNullable()
      table.integer('harga').unsigned().references('id').inTable('barangs')
      table.integer('disc')
      table.integer('total_disc')
      table.timestamps()
    })
  }

  down () {
    this.drop('po_details')
  }
}

module.exports = PoDetailSchema
