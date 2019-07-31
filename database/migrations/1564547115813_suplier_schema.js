'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuplierSchema extends Schema {
  up () {
    this.create('supliers', (table) => {
      table.increments()
      table.string('kd_sup', 5).notNullable().unique()
      table.string('nama_sup', 256).notNullable()
      table.string('alamat', 256).notNullable()
      table.string('kota', 256).notNullable()
      table.integer('telp', 15).notNullable()
      table.string('email', 256).notNullable()
      table.string('pic', 256).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('supliers')
  }
}

module.exports = SuplierSchema
