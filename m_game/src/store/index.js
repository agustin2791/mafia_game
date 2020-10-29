import Vue from 'vue'
import Vuex from 'vuex'

import { API, graphqlOperation } from 'aws-amplify'
import { getGame } from '../graphql/queries'
import { createGame } from '../graphql/mutations'
import { onUpdateGame, onUpdatePlayer, onCreatePlayer } from '../graphql/subscriptions'

Vue.use(Vuex)
let gameSub;
let playerSub;
let playerCreateSub;
export default new Vuex.Store({
  state: {
    activeGame: null,
    playerInfo: null,
  },
  mutations: {
    async getActiveGame(state) {
      try {
        let activeGameId = JSON.parse(localStorage.getItem('currentGame'))
        console.log(activeGameId.id)
        const response = await API.graphql(graphqlOperation(getGame, {id: activeGameId.id}))
        state.activeGame = response.data.getGame
        if (state.activeGame != null) {
          gameSub = API.graphql(
            graphqlOperation(onUpdateGame, {id: state.activeGame.id})
            ).subscribe({
              next: (res) => {
                console.log(res)
                if (res.value.data.onUpdateGame.id === state.activeGame.id) {
                  state.activeGame = res.value.data.onUpdateGame
                  localStorage.setItem('currentGame', JSON.stringify(state.activeGame))
                }
              }
            })
          }
      } catch (error) {
        console.log('get active game error', error)
        state.activeGame = null
      }
    },
    async setActiveGame(state, game) {
      console.log('setting game')
      state.activeGame = game
      localStorage.setItem('currentGame', JSON.stringify(game))
      gameSub = API.graphql(
        graphqlOperation(onUpdateGame, {id: game.id})
        ).subscribe({
          next: (res) => {
            console.log(res)
            if (res.value.data.onUpdateGame.id === state.activeGame.id) {
              state.activeGame = res.value.data.onUpdateGame
              localStorage.setItem('currentGame', JSON.stringify(state.activeGame))
            }
          }
        })
    },
    async getPlayerInfo(state) {
      try {
        const player = JSON.parse(localStorage.getItem('currentPlayer'))
        state.playerInfo = player
        playerCreateSub = API.graphql(graphqlOperation(onCreatePlayer))
          .subscribe({
            next: (res) => {
              console.log('player created', res)
              if (state.activeGame != null) {
                if (res.value.data.onCreatePlayer.game_id == state.activeGame.id) {
                  state.activeGame.guests.items.push(res.value.data.onCreatePlayer)
                } 
              }
              
            }
          })
        if (state.playerInfo != null) {
          playerSub = API.graphql(graphqlOperation(onUpdatePlayer))
            .subscribe({
              next: (res) => {
                if (res.value.data.onUpdatePlayer.id == state.playerInfo.id) {
                  state.playerInfo = res.value.data.onUpdatePlayer
                  localStorage.setItem('playerInfo', JSON.stringify(state.playerInfo))
                  if (res.value.data.onUpdateGame.game_id == state.activeGame.id) {
                    let player = state.activeGame.guests.items.find(g => g.id == res.value.data.onUpdateGame)
                    let idx = state.activeGame.guests.items.indexOf(player)
                    state.activeGame.guests.items.splice(idx, 1, res.value.data.onUpdatePlayer)
                  }
                }
              }
            })
          }
      } catch (error) {
        state.playerInfo = null
      }
    },
    setPlayerInfo(state, player) {
      state.playerInfo = player
      localStorage.setItem('currentPlayer', JSON.stringify(player))
      playerSub = API.graphql(graphqlOperation(onUpdatePlayer))
          .subscribe({
            next: (res) => {
              if (res.value.data.onUpdatePlayer.id == state.playerInfo.id) {
                state.playerInfo = res.value.data.onUpdatePlayer
                localStorage.setItem('playerInfo', JSON.stringify(state.playerInfo))
              }
            }
          })
    },
    destroyGame(state) {
      state.activeGame = null
      state.playerInfo = null
      localStorage.removeItem('currentGame')
      localStorage.removeItem('currentPlayer')
    }
  },
  actions: {
    getGame({ commit }) {
      commit('getActiveGame')
    },
    setActiveGame({ commit }, game) {
      commit('setActiveGame', game)
    },
    getPlayer({ commit }) {
      commit('getPlayerInfo')
    },
    setPlayer({ commit }, player) {
      commit('setPlayerInfo', player)
    }
  },
  modules: {
  }
})
