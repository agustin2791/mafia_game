<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="6">
                <h2>Game Lobby - Game Code: {{ game.party_code }}</h2>
                <h3>Joined as {{ player.name }}</h3>
                <p>...Waiting for others</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: ["game", "player"]
}
</script>