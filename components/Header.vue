<script setup>
import { ref } from 'vue'

const message = ref('This a testing meesage extra large only for testing prupources in this component')
</script>

<template>
	<div class="header relative">
		<div class="header__content h-[70vh] p-[10vw] relative flex items-center justify-start">
			<Image class="header__content__media absolute left-0 top-0" />
			<div class="header__content__text relative w-[50%] h-fit shadow-text p-[20px] text-white z-[1] border">
				{{ message }}
			</div>
		</div>
	</div>
</template>
