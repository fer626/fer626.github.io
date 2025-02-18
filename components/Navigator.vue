<script setup>
import { reactive } from 'vue'
const props = defineProps(() => ({
	links: {
		type: Array,
		default: () => []
	}
}))

const _links = [
	{ title: 'Home', url: '/' },
	{ title: 'About us', url: '/about-us' },
	{ title: 'Contact me', url: '/contact-me' },
	{ title: 'Guarantee', url: '/guarantee' },
	{ title: 'Policy', url: '/policy' },
] 
</script>

<template>
	<div class="bg-red-300">
		<ul class="flex gap-[10px]">
			<li v-for="link in _links">
				<NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>
