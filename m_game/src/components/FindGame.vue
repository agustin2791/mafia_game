<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="6">
                <h2>Find Game</h2>
                <label>Enter Code</label>
                <b-input v-model="game_code" placeholder="ABCDE"></b-input>
                <b-button variant="outline-primary" @click="findGame">Search</b-button>
            </b-col>
        </b-row>
        <b-row class="justify-content-center">
            <b-col cols="6">
                <ul v-if="game_list.length > 0">
                    <li v-for="g in game_list" :key="g.id">
                        {{g.party_code}} - {{ g.createdAt }}
                        <b-button @click="joinGame(g)">Join</b-button><br><br>
                        
                    </li>
                </ul>
                <div v-else>No Games Listed</div>
            </b-col>
            {{ activeGame }}
        </b-row>
    </b-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { listGames } from '../graphql/queries'
import { onCreateGame, onUpdateGame } from '../graphql/subscriptions'

import { mapState } from 'vuex'

let gameUpdate
let gameCreate

export default {
    data() {
        return {
            game_code: null,
            game_list: []
        }
    },
    computed: mapState(['activeGame']),
    methods: {
        async findGame() {
            let code = this.game_code
            try {
                console.log('looking for games')
                const response = await API.graphql(graphqlOperation(listGames, {filter: {
                    party_code: {eq: code},
                    isActive: {eq: true}
                }}))
                this.game_list = response.data.listGames.items
                // gameUpdate = API.graphql(
                //     graphqlOperation(onUpdateGame, {id: game.id})
                // ).subscribe({
                //     next: (res) => {
                //         console.log('Updated Game', res)
                //     }
                // })
            } catch (error) {
                console.log('error in finding game list:', error)
            }
        },
        async joinGame(game) {
            this.$store.dispatch('setActiveGame', game)
            
        }
    },
    async mounted() {
        // gameCreate = API.graphql(
        //     graphqlOperation(onCreateGame)
        // ).subscribe({
        //     next: (res) => {
        //         console.log('Created Game', res)

        //     }
        // })
    }
}
</script>