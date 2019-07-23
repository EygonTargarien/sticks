import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		activePlayer: 1,
		freezChangeActivePlayer: false,

		player1: {
			id: 'player_id1',
			userName: 'Scorpion',
			counter: 0
		},
		player2: {
			id: 'player_id2',
			userName: 'Sub zero',
			counter: 0
		},

		dataBase: {
			'1_1': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'1_2': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'1_3': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'1_4': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'2_1': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'2_2': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'2_3': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'2_4': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'3_1': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'3_2': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'3_3': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'3_4': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'4_1': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'4_2': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'4_3': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},
			'4_4': {
				t: 0,
				r: 0,
				b: 0,
				l: 0,
				win: null,
			},

		}
	},

	getters:{
		totalCounter(state){
			return state.player1.counter + state.player2.counter;
		}
	},

	mutations: {
		MUTATION_SET_SELECT_BORDER(state, {rowIndex, columnIndex, type}){
			state.freezChangeActivePlayer = false;
			state.dataBase[`${rowIndex}_${columnIndex}`][type] = 1;

			switch (type){
				case 't': {
					if (rowIndex > 1) state.dataBase[`${+rowIndex - 1}_${columnIndex}`]['b'] = 1;
					break;
				}

				case 'r': {
					if (columnIndex < 4) state.dataBase[`${rowIndex}_${+columnIndex + 1}`]['l'] = 1;
					break;
				}

				case 'b':
					if (rowIndex < 4) state.dataBase[`${+rowIndex + 1}_${columnIndex}`]['t'] = 1;
					break;

				case 'l':
					if (columnIndex > 1) state.dataBase[`${rowIndex}_${+columnIndex - 1}`]['r'] = 1;
					break;
			}

			state.activePlayer = +!state.activePlayer;
		},

		MUTATION_SET_COUNTER(state){
			if (state.freezChangeActivePlayer) {
				state.activePlayer ? ++state.player2.counter : ++state.player1.counter;
			} else{
				!state.activePlayer ? ++state.player2.counter : ++state.player1.counter;
			}

			if (!state.freezChangeActivePlayer) state.activePlayer = +!state.activePlayer;
			state.freezChangeActivePlayer = true;
		},

		MUTATION_SET_WIN_PLAYER(state, key){
			let activePlayerId = null;

			if (state.freezChangeActivePlayer) {
				activePlayerId = state.activePlayer ? state.player2.id : state.player1.id;
			} else{
				activePlayerId = !state.activePlayer ? state.player2.counter : state.player1.counter;
			}

			state.dataBase[key].win = activePlayerId;
		}
	},
	actions: {

	}
});
