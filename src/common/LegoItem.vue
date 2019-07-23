<template>
	<div class="lego"
			:class="{
				'has-top': legoCnf.t,
				'has-right': legoCnf.r,
				'has-bottom': legoCnf.b,
				'has-left': legoCnf.l
				}">

		<div class="lego__body" @click="hasOpenChange = true"></div>

		<div class="lego__change" :class="{'has-active': hasOpenChange}" @mouseleave="hasOpenChange = false">
			<div class="lego__item has-top" v-if="!legoCnf.t">
				<div class="lego__icon" @click="onsSelectBorder('t')"></div>
			</div>
			<div class="lego__item has-right" v-if="!legoCnf.r">
				<div class="lego__icon" @click="onsSelectBorder('r')"></div>
			</div>
			<div class="lego__item has-bottom" v-if="!legoCnf.b">
				<div class="lego__icon" @click="onsSelectBorder('b')"></div>
			</div>
			<div class="lego__item has-left" v-if="!legoCnf.l">
				<div class="lego__icon" @click="onsSelectBorder('l')"></div>
			</div>
		</div>

		<div class="lego__label" v-if="winType">
			<div class="lego__player1" v-if="winType == 'player_1'">
				X
			</div>

			<div class="lego__player1" v-if="winType == 'player_2'">
				O
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'lego-item',
		props: ['legoKey'],
		data () {
			return {
				rowIndex: this.legoKey.split('_')[0],
				columnIndex: this.legoKey.split('_')[1],
				hasOpenChange: false
			};
		},

		watch:{
			closeArea(){
				this.$store.commit('MUTATION_SET_COUNTER');
				this.$store.commit('MUTATION_SET_WIN_PLAYER', this.legoKey);
			}
		},
		
		computed: {
			legoCnf(){
				return this.$store.state.dataBase[this.legoKey]
			},
			closeArea(){
				return this.legoCnf.t && this.legoCnf.r && this.legoCnf.b && this.legoCnf.l || false
			},
			winType(){
				let winId = this.legoCnf.win;

				if (winId){
					return winId == 'player_id1' ? 'player_1' : 'player_2';
				}

				return false;
			}
		},

		methods:{
			onsSelectBorder(type){
				this.$store.commit('MUTATION_SET_SELECT_BORDER',{
					rowIndex: this.rowIndex,
					columnIndex: this.columnIndex,
					type: type
				});

				this.hasOpenChange = false;
			}
		}
	};
</script>

<style scoped lang=scss>
	.lego {
		width: 100px;
		height: 100px;
		border: 3px solid $c_border;
		margin-right: -3px;
		margin-bottom: -3px;
		position: relative;
		&.has-top {
			border-top: 3px solid $c_alt;
		}
		&.has-right {
			border-right: 3px solid $c_alt;
		}
		&.has-bottom {
			border-bottom: 3px solid $c_alt;
		}
		&.has-left {
			border-left: 3px solid $c_alt;
		}
		&__body{
			height: 100%;
			cursor: pointer;
			transition: all 0.3s;
			&:hover{
				background: rgba(238,238,238,0.5);
			}
		}
		&__change{
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s;
			z-index: 1;
			&.has-active{
				opacity: 1;
				visibility: visible;
			}
		}
		&__item{
			position: absolute;
			&.has-top{
				top: -10px;
				left: 50%;
				transform: translateX(-50%);
			}
			&.has-right{
				right: -10px;
				top: 50%;
				transform: translateY(-50%);
			}
			&.has-bottom{
				bottom: -10px;
				left: 50%;
				transform: translateX(-50%);
			}
			&.has-left{
				left: -10px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		&__icon{
			width: 20px;
			height: 20px;
			background: $c_alt;
			cursor: pointer;
		}

		&__label{
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
