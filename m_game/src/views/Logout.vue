<template>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
    // methods: {
    //     async signOut
    // },
    async mounted() {
        try {
            await Auth.signOut();
            this.$router.push({path: 'login'})
        } catch (error) {
            console.log('error signing out:', error)
        }
    }
}
</script>