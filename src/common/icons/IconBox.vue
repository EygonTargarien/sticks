<template>
	<svg xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			:viewBox="viewBox">
		<g>
			<slot @setViewBox="setViewBox"></slot>
		</g>
	</svg>

</template>

<script>
	export default {
		props: {
			width: {
				type: [Number, String],
				default: 18
			},
			height: {
				type: [Number, String],
				default: 18
			}
		},
		data () {
			return {
				viewBox: '0 0 18 18'
			};
		},
		created () {
			this.$on('setViewBox', cord => {
				this.viewBox = cord;
			});
		}

	};
</script>

<style lang="scss">
	svg {
		display: inline-block;
		vertical-align: baseline;
		&.svg--default{

		}
		&.has-hover{
			transition: all 0.3s;
			&:hover{
				fill: $c_alt;
			}
		}
	}
</style>
