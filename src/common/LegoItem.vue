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
				<div class="lego__icon" @click="onsSelectBorder('t')">
					<icon-box>
						<icon-arr></icon-arr>
					</icon-box>
				</div>
			</div>
			<div class="lego__item has-right" v-if="!legoCnf.r">
				<div class="lego__icon" @click="onsSelectBorder('r')">
					<icon-box >
						<icon-arr></icon-arr>
					</icon-box>
				</div>
			</div>
			<div class="lego__item has-bottom" v-if="!legoCnf.b">
				<div class="lego__icon" @click="onsSelectBorder('b')">
					<icon-box>
						<icon-arr></icon-arr>
					</icon-box>
				</div>
			</div>
			<div class="lego__item has-left" v-if="!legoCnf.l">
				<div class="lego__icon" @click="onsSelectBorder('l')">
					<icon-box>
						<icon-arr></icon-arr>
					</icon-box>
				</div>
			</div>
		</div>

		<div class="lego__label" v-if="winType">
			<div class="lego__player" v-if="winType == 'player_1'">
				<img :src="require('@img/player_1.png')" alt="">
			</div>

			<div class="lego__player" v-if="winType == 'player_2'">
				<img :src="require('@img/player_2.png')" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import IconBox from '@icons/IconBox';
	import IconArr from '@icons/IconArr';

	export default {
		name: 'lego-item',
		components:{
			IconBox,
			IconArr
		},
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
		background: #fff;
		width: 90px;
		height: 90px;
		border: 6px solid $c_border;
		margin-right: -6px;
		margin-bottom: -6px;
		position: relative;
		&.has-top {
			border-top: 6px solid $c_alt;
		}
		&.has-right {
			border-right: 6px solid $c_alt;
		}
		&.has-bottom {
			border-bottom: 6px solid $c_alt;
		}
		&.has-left {
			border-left: 6px solid $c_alt;
		}
		&__body{
			height: 100%;
			cursor: pointer;
			transition: all 0.3s;
			&:hover{
				background: rgba(238,238,238,0.8);
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
			transition: all 0.1s;
			z-index: 1;
			&.has-active{
				opacity: 1;
				visibility: visible;
			}
		}
		&__item{
			position: absolute;
			&.has-top{
				top: -22px;
				left: 50%;
				transform: translateX(-50%);
				.lego__icon{
					transform: rotate(-90deg);
				}
			}
			&.has-right{
				right: -22px;
				top: 50%;
				transform: translateY(-50%);
			}
			&.has-bottom{
				bottom: -22px;
				left: 50%;
				transform: translateX(-50%);
				.lego__icon{
					transform: rotate(90deg);
				}
			}
			&.has-left{
				left: -22px;
				top: 50%;
				transform: translateY(-50%);
				.lego__icon{
					transform: rotate(180deg);
				}
			}
		}
		&__icon{
			cursor: pointer;
			display: flex;
			align-items: center;
			svg{
				width: 35px;
				height: 35px;
			}
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
		&__player{
			padding: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
