<script setup>
const message = ref('hello world')

const props = defineProps({
	style: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: 'Main title'
	},
	description: {
		type: String,
		default: 'Main description for component'
	},
	image: {
		type: Object,
		default: null
	},
	textAling: {
		type: String,
		default: 'left',
	},
	textContainer: {
		type: Boolean,
		default: false	
	},
	imageAling: {
		type: String,
		default: 'full'
	},
	buttons: {
		type: Array,
		default: () => ([])
	}
})
</script>

<template>
	<div class="banner h-[50vh]">
		<div class="container relative h-full p-[40px]">
			<div class="container__img absolute left-0 top-0 w-full h-full">
				<Image />
			</div>
			<div class="container__text relative z-[1] bg-white p-[20px] w-3/5 h-full flex flex-col items-center gap-[15px]">
				<h3>{{title}}</h3>
				<p>{{description}}</p>
			</div>
		</div>
	</div>
</template>
