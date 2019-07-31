'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangSuplierSchema extends Schema {
  up () {
    this.create('barang_supliers', (table) => {
      table.increments()
      table.integer('kd_sup').unsigned().references('id').inTable('supliers')
      table.integer('kd_brg').unsigned().references('id').inTable('barangs')
      table.integer('harga').unsigned().references('id').inTable('barangs')
      table.integer('disc').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('barang_supliers')
  }
}

module.exports = BarangSuplierSchema
