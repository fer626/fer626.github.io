<template>
	<img :src="url" :alt="alt" class="w-full h-full object-fill" />
</template>

<script setup>
import { computed } from 'vue'

const alt = ref('una imagen random')
const url = computed(() => {
	return '' || '/assets/img/default.png'
})

</script>
