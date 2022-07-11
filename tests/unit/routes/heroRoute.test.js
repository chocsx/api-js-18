import test from 'node:test'
import assert from 'node:assert'
const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())

import {
  routes
} from './../../../src/routes/hero.js'
import { DEFAULT_HEADER } from '../../../src/util/utils.js'

test('Hero routes - endpoints test suite', async(t) => {
  await t.test('it should call /heroes:get route', async () => {
    const databaseMock = [{
      "id":"e23bd5be-5dfd-4f1a-a15d-21618ad9f714",
      "name":"Batman",
      "age":50,
      "power":"money"
    }]
    
    const heroServiceMock = {
      find: async () => databaseMock
    }

    const endpoints = routes({
      heroService: heroServiceMock
    })

    const endpoint = '/heroes:get'
    const request = {}
    const response = {
      write: callTracker.calls(item => {
        const expected = JSON.stringify({
          results: databaseMock
        })
        assert.strictEqual(
          item,
          expected,
          'write should be called with the correct payload'
        )
      }),
      end: callTracker.calls(item => {
        assert.strictEqual(
          item,
          undefined,
          'end should be called without params'
        )
      })
    }
    const route = endpoints[endpoint];
    await route(request, response)
  })
  await t.todo('it should call /heroes:post route')
})