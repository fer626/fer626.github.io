import fs from 'fs'

export default defineEventHandler(async event => {
	// const fs = require('fs')
	const params = await readBody(event)
	console.log('raw data:', params)
	const { name, body } = params
	console.log('name:', name)
	let created = null
	//const json = JSON.parse(body)

	created = fs.writeFile(`public/${name}.json`, body, (e) => {
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
