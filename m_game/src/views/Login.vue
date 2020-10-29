<template>
    <div class="container">
        <b-card
            title="Log-in"
        >
            <label>Username</label>
            <b-form-input v-model="username"></b-form-input>
            <label>Password</label>
            <b-form-input v-model="password" type="password"></b-form-input>
            <br>
            <b-button variant="primary" @click="signIn">Sign-in</b-button>
        </b-card>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        async signIn() {
            let _t = this
            try {
                await Auth.signIn(_t.username, _t.password)
                this.$router.push({path: 'user_home'})
            } catch (error) {
                console.log('error signing in:', error)
            }
        }
    }
}
</script>