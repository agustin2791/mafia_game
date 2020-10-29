<template>
    <b-container>
        <b-row class="justify-content-center" v-if="!hasGame && !hasPlayer">
            <b-col cols="6">
                <label>Create a game with a party limit</label>
                <b-input type="number" v-model="playerL"></b-input>
                <b-button variant="outline-primary" @click="makeGame">Create a Game</b-button>
            </b-col>
        </b-row>
        <b-row class="justify-content-center" v-if="hasGame && !hasPlayer">
            <b-col cols="6">
                <h2>Game Code: <strong>{{ game.party_code }}</strong></h2>
                <br>
                <label>Join with name:</label>
                <b-input v-model="playerName"></b-input>
                <br>
                <b-button variant="outline-primary" @click="readyPlayer">Join Game</b-button>
            </b-col>
        </b-row>
        <b-row class="justify-content-center" v-if="hasGame && hasPlayer">
            <b-col cols="6">
                <h2>Game Code: <strong>{{ game.party_code }}</strong></h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Is Story Teller</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(g, index) in game.guests.items" :key="g.id">
                            <th>{{ g.name }}</th>
                            <th>{{ g.isStoryTeller ? 'Yes' : 'No' }}</th>
                            <th><b-button variant="secondary" @click="setAsTeller(g, index)">Set as Story Teller</b-button></th>
                        </tr>
                        <tr v-for="i in (game.party_limit - game.guests.items.length)" :key="i">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <br><br>
                <b-button variant="success" @click="startGame">Start Game</b-button>
            </b-col>
        </b-row>
        <div style="display: none">
            {{ game }}
            {{ player }}
        </div>
    </b-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { getGame, listGames } from '../graphql/queries'
import { createGame, updateGame, createPlayer, updatePlayer } from '../graphql/mutations'
export default {
    data() {
        return {
            hasGame: false,
            hasPlayer: false,
            playerL: 6,
            all_games: [],
            playerName: '',
            section: 'createGame'
        }
    },
    computed: {
        game() {
            let game = this.$store.state.activeGame
            console.log(game)
            if (game !== null)
                this.hasGame = true
            return game
        },
        player() {
            let player = this.$store.state.playerInfo
            if (player !== null)
                this.hasPlayer = true
            return player
        }
    },
    methods: {
        async makeGame() {
            // creates a game
            let game_code = this.generateGameCode()
            let limit = this.playerL
            try {
                const response = await API.graphql(graphqlOperation(createGame, {
                    input: {
                        party_code: game_code,
                        party_limit: limit,
                        isActive: true,
                        roundActive: false,
                        discussionActive: false
                    }
                }))
                console.log('game created', response)
                this.$store.dispatch('setActiveGame', response.data.createGame)
            } catch (error) {
                console.log('Error creating Game', error)
            }
        },
        generateGameCode() {
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let c_length = chars.length
            let code = ''
            for (let i = 0; i < 6; i++) {
                code += chars.charAt(Math.floor(Math.random() * c_length))
            }
            console.log(code)
            return code
        },
        async readyPlayer() {
            const playerInfo = {
                game_id: this.game.id,
                name: this.playerName,
                isStoryTeller: false,
                isPed: false,
                isMafia: false,
                isCop: false,
                isAlive: true,
                isHost: true
            }
            try {
                const response = await API.graphql(graphqlOperation(createPlayer, {input: playerInfo}))
                console.log('Player created')
                this.$store.dispatch('setPlayer', response.data.createPlayer)
            } catch (error) {
                console.log('Error in creating player')
            }
        },
        async setAsTeller(guest, index) {
            let all_guests = this.game.guests.items
            all_guests.forEach(g => {
                if (g.id != guest.id && g.isStoryTeller) {
                    const request = API.graphql(graphqlOperation(updatePlayer, {input: {id: g.id, isStoryTeller: false}}))
                }
            })
            const request = API.graphql(graphqlOperation(updatePlayer, {input: {id: guest.id, isStoryTeller: true}}))
        },
        startGame() {}
    },
    watch: {
        hasGame(val) {
            if (val == true && this.hasPlayer == false) {
                this.section = 'joinGame'
            }
        },
        hasPlayer(val) {
            if (val == true && this.hasGame == true) {
                this.section = 'gameLobby'
            }
        }
    },
    async created() {
        try {
            const response = await API.graphql(graphqlOperation(listGames))
            this.all_games = response.data.listGames.items
        } catch (error) {
            console.log('getting all games error', error)
        }
        this.$store.dispatch('getGame')
        this.$store.dispatch('getPlayer')
    }
}
</script>