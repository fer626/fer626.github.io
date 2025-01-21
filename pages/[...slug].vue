<script setup>
import { ref } from 'vue'

const route = useRoute()
// const slug = `/${route.params.slug.join('/')}`
const fileName = ref('')
const message = ref('')

const createFile = async () => {
	const data = await $fetch('/api/create', {
		body: JSON.Sstringify({ name: fileName.value })
	})
	message.value = 'File Creaed successfully!.'
}
</script>

<template>
	<div>
		file name: {{ fileName }} <br />
		<input v-model="fileName"  /> &nbsp;
		<button @click="createFile">Create a test file</button>
		<p v-if="message">{{message}}</p>
	</div>
</template>

<style scoped>
input {
	border: 1px solid #ccc;
}
button {
	background: black;
	color: white;
	padding: 5px 10px;
	border-radius: 3px;
}
</style>
