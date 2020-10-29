<template>
    <component :is="section" :game="game" :player="player"></component>
</template>

<script>
import Join from '../components/Join'
import FindGame from '../components/FindGame'
import Play from '../components/Play'
import { mapState } from 'vuex'
import { API, graphqlOperation } from 'aws-amplify'
import { getGame } from '../graphql/queries'
import { createGame } from '../graphql/mutations'

export default {
    components: {
        AppJoin: Join,
        AppFindGame: FindGame,
        AppPlay: Play
    },
    data() {
        return {
            section: 'app-find-game',
            hasGame: false,
            hasPlayer: false
        }
    },
    computed: {
        game() {
            let game = this.$store.state.activeGame
            console.log('game info', game)
            if (game !== null){
                this.hasGame = true
                this.section = 'app-join'
            }
            return game
        },
        player() {
            let player = this.$store.state.playerInfo
            console.log('player info', player)
            if (player !== null){
                this.hasPlayer = true
                this.section = 'app-play'
            }
            return player
        }
    },
    watch: {
        hasGame(val) {
            if (val == true && this.hasPlayer == false) {
                this.section = 'app-join'
            }
        },
        hasPlayer(val) {
            if (val == true && this.hasGame == true) {
                this.section = 'app-play'
            }
        }
    },
    async mounted() {
        this.$store.dispatch('getGame')
        this.$store.dispatch('getPlayer')
    }
}
</script>