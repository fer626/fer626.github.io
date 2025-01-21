import fs from 'fs'

export default defineEventHandler(async event => {
	// const fs = require('fs')
	const params = await readBody(event)
	console.log('name:', params)
	const { name } = params
	console.log('name:', name)
	let created = null
	const json = JSON.stringify({
		hello: 'world'
	})

	created = fs.writeFile(`public/${name}.json`, json, (e) => {
		if (e) {
			console.log('[Create/Error]:', e)
			created =  false
		} else {
			console.log(`[Create] File "${name}" created successfully.`)
			created = true
		}
		return !e
	})

	return { success: created }
})
