<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="6">
                <h2>Game Code: {{ game.party_code }}</h2>
                <label>Join with name:</label>
                <b-input v-model="name"></b-input>
                <b-button variant="primary" @click="joinGame">Join Game</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { createPlayer } from '../graphql/mutations'

export default {
    data() {
        return {
            name: null
        }
    },
    methods: {
        async joinGame() {
            try {
                const response = await API.graphql(graphqlOperation(createPlayer, {input: {
                    game_id: this.game.id,
                    name: this.name,
                    isStoryTeller: false,
                    isPed: false,
                    isMafia: false,
                    isCop: false,
                    isAlive: true,
                    isHost: false
                }}))
                this.$store.dispatch('setPlayer', response.data.createPlayer)
            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        game() {
            let game = this.$store.state.activeGame
            return game
        }
    }
}
</script>