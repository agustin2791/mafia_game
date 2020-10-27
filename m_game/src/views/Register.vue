<template>
    <b-container>
        <b-row>
            <b-col>
                <b-label>Username:</b-label>
                <b-form-input v-model="username"></b-form-input>
                <b-label>Password:</b-label>
                <b-form-input v-model="password" type="password"></b-form-input>
                <b-label>Email:</b-label>
                <b-form-input v-model="email" type="email"></b-form-input>
                <b-label>Phone:</b-label>
                <b-form-input v-model="phone" type="phone"></b-form-input>
                <br>
                <b-button variant="primary" @click="signUp">Register</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { auth } from 'aws-amplify'
export default {
    data() {
        return {
            username: null,
            password: null,
            email: null,
            phone: null,
        }
    },
    methods: {
        async signUp() {
            let _t = this
            try {
                const { user } = await Auth.signUp({
                    username: _t.username,
                    password: _t.password,
                    attributes: {
                        email: _t.email,
                        phone_number: _t.phone
                    }
                });
                console.log(user)
            } catch (error) {
                console.log('error signing up:', error)
            }
        }
    }
}
</script>