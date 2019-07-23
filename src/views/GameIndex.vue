<template>
	<div class="game">
		<div class="game__bgLeft" :style="{'background-image': `url(${require('@img/bg_left.jpg')}`}"></div>
		<div class="game__bgRight" :style="{'background-image': `url(${require('@img/bg_right.jpg')}`}"></div>

		<div class="game__start" @click="hasStartGame=true" v-if="!hasStartGame">
			<img :src="require('@img/fight.png')" alt="">
		</div>

		<div class="game__result" :class="{'has-active': hasShowResult}">
			<div class="game__total">
				<template v-if="winPlayer == 'draw'">draw</template>
				<template v-else>
					<img :src="require('@img/win.png')" alt="">
					<span> <span>{{winPlayer}}</span> win!</span>
				</template>

				<button class="btn" @click="onRestart"><span>Restart</span></button>
			</div>

		</div>



		<div class="game__wrap" v-if="hasStartGame">
			<div class="game__info">
				<div class="game__user">
					Now <span>{{activePlayer.userName}}</span>
				</div>
			</div>

			<div class="game__item">
				{{player2.userName}} <span>{{player2.counter}}</span>
			</div>
			<div class="game__calc">

				<game-calc></game-calc>
			</div>

			<div class="game__item">
				{{player1.userName}} <span>{{player1.counter}}</span>
			</div>
		</div>
	</div>

</template>

<script>
	import GameCalc from './GameCalc';

	export default {
		name: 'game-index',
		components: {
			GameCalc
		},

		data(){
			return {
				hasStartGame: false,
				hasShowResult: false,

				winPlayer: null
			}
		},

		watch:{
			totalCounter(){
				if (this.totalCounter == 16){
					this.getWinPlayer();
					this.hasShowResult = true;
				}
			}
		},

		computed:{
			player1(){
				return this.$store.state.player1;
			},
			player2(){
				return this.$store.state.player2;
			},

			totalCounter(){
				return this.$store.getters.totalCounter;
			},

			activePlayer(){
				return this.$store.state.activePlayer ? this.player2 : this.player1
			}
		},

		methods:{
			getWinPlayer(){
				let couner1 = this.player1.counter,
					counter2 = this.player2.counter;

				if (couner1 > counter2) {
					this.winPlayer = this.player1.userName

				} else if (couner1 < counter2){
					this.winPlayer = this.player2.userName
				} else {
					this.winPlayer = 'draw'
				}
			},

			onRestart(){
				document.location.reload();
			}
		}
	};
</script>

<style scoped lang=scss>
	.game{
		background-color: #000000;
		height: 100%;
		position: relative;
		&__bgLeft{
			width: 35%;
			height: 100%;
			background: #000;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: left bottom;
			position: absolute;
			left: 0;
			top: 0;
		}
		&__bgRight{
			width: 35%;
			height: 100%;
			background: #000;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: right bottom;
			position: absolute;
			right: 0;
			top: 0;
		}
		&__wrap{
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 100%;
			position: relative;
			padding: 12% 5% 0;
		}
		&__info{
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 5%;
			display: flex;
			justify-content: center;
		}
		&__start{
			cursor: pointer;
			position: absolute;
			top: 65%;
			left: 50%;
			transform: translateX(-50%);
			filter: grayscale(1);
			transition: all 0.3s;
			&:hover{
				filter: grayscale(0);
			}
		}

		&__user{
			font-size: 35px;
			text-transform: uppercase;
			font-family: $f_alt;
			color: #fff;
			text-align: center;
			span{
				display: block;
				color: $c_alt;
				font-weight: bold;
				font-size: 65px;
				line-height: 1.1;
			}
		}
		&__item{
			font-size: 55px;
			text-transform: uppercase;
			font-family: $f_alt;
			color: #fff;
			text-align: center;
			background: rgba(0,0,0,0.8);
			padding: 20px;
			border-radius: 10px;
			span{
				display: block;
				color: $c_alt;
				font-weight: bold;
				font-size: 85px;
			}
		}
		&__result{
			position: absolute;
			z-index: 5;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			background: rgba(0,0,0,0.9);
			text-align: center;
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s;
			&.has-active{
				opacity: 1;
				visibility: visible;
			}
		}
		&__total{
			font-size: 50px;
			color: #fff;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			flex-direction: column;
			font-family: $f_alt;
			img{
				margin-bottom: 30px;
				display: inline-block;
			}
			span{
				display: inline-block;
				span{
					color: $c_alt;
					font-weight: bold;
				}
			}
			button{
				margin-top: 50px;
			}
		}
	}

</style>
