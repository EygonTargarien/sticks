<template>
	<div class="game">
		<div class="game__item">
			{{player1.userName}}: {{player1.counter}}
		</div>
		<div class="game__calc">
			<div class="game__user">
				Active player: {{activePlayer.userName}}
			</div>

			<div class="game__result" v-if="hasShowResult">
				<template v-if="winPlayer == 'draw'">draw</template>
				<template v-else>
					{{winPlayer}} wins !!!!
				</template>
			</div>
			<game-calc></game-calc>
		</div>

		<div class="game__item">
			{{player2.userName}}: {{player2.counter}}
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
				hasShowResult: false,

				winPlayer: null
			}
		},

		watch:{
			totalCounter(){
				console.log('RUN TOTAL', this.totalCounter);
				if (this.totalCounter == 4){
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
			}
		}
	};
</script>

<style scoped lang=scss>
	.game{
		display: flex;
		padding: 100px;
		align-items: center;
		justify-content: space-between;
	}
</style>
