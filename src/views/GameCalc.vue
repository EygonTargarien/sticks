<template>
	<div class="calc">
		<div class="calc__board">
			<lego-item legoKey="1_1"></lego-item>
			<lego-item legoKey="1_2"></lego-item>
			<lego-item legoKey="1_3"></lego-item>
			<lego-item legoKey="1_4"></lego-item>

			<lego-item legoKey="2_1"></lego-item>
			<lego-item legoKey="2_2"></lego-item>
			<lego-item legoKey="2_3"></lego-item>
			<lego-item legoKey="2_4"></lego-item>

			<lego-item legoKey="3_1"></lego-item>
			<lego-item legoKey="3_2"></lego-item>
			<lego-item legoKey="3_3"></lego-item>
			<lego-item legoKey="3_4"></lego-item>

			<lego-item legoKey="4_1"></lego-item>
			<lego-item legoKey="4_2"></lego-item>
			<lego-item legoKey="4_3"></lego-item>
			<lego-item legoKey="4_4"></lego-item>
		</div>
	</div>
</template>

<script>
	import LegoItem from '@common/LegoItem';
	export default {
		name: 'game-calc',
		components: {
			LegoItem
		}
	};
</script>

<style scoped lang=scss>
	.calc{
		padding: 100px;
		&__board{
			display: flex;
			flex-wrap: wrap;
			width: 400px;
		}
	}
</style>
