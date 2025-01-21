<script setup>
import { ref, reactive,  computed } from 'vue'

const route = useRoute()
// const slug = `/${route.params.slug.join('/')}`
const fileName = ref('')
const body = reactive({
	name: '',
	lastname: ''
})
const message = ref('')
// const body = computed(() => ({
//	data: JSON.stringify({name: fileName.value })
// }))

const createFile = async () => {
	
	message.value = await $fetch('/api/create', {
		method: 'POST',
		body: {
			name: fileName.value,
			body: JSON.stringify(body)
		}
	}).then(r => r)
	.catch(e => e)
}
</script>

<template>
	<div>
		file name: {{ fileName }} <br />
		<p>JSON: {{ body }}</p>
		<input v-model="fileName"  /> &nbsp;
		<p>name:</p><input v-model="body.name" />
		<p>last name:</p><input v-model="body.lastname" />
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
