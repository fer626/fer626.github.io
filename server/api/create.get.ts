import fs from 'fs'

export default defineEventHandler(async event => {
	// const fs = require('fs')
	const name = await readBody(event)
	console.log('name:', name)
	let created = null
	const json = JSON.stringify({
		hello: 'world'
	})

	created = fs.writeFile('public/test.json', json, (e) => {
		if (e) {
			console.log('[Create/Error]:', e)
			created =  false
		} else {
			console.log('[Create] File created successfully')
			created = true
		}
		return !e
	})

	return { success: created }
})
