<template>
	<g>
		<polygon style="fill:#c33;stroke:#333;stroke-width:6;stroke-miterlimit:10;" points="39.071,25.713 10.071,45.713
	10.071,26.077 10.071,5.713 "/>
	</g>
</template>

<script>
	export default {
		name: 'icon-close',
		data(){
			return{
				viewBox: '0 0 51.426 51.426',
			}
		},

		created(){
			this.$parent.$emit('setViewBox', this.viewBox)
		}
	};
</script>

<style scoped>

</style>
