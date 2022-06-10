<template>
    <v-app>
        <div v-if="userGoogle === false">Loading...</div>
        <v-app-bar color="primary" v-if="userGoogle !== false">
            <v-app-bar-title>VuetifyCHAT</v-app-bar-title>
            <template v-slot:append>
                <v-btn
                    prepend-icon="mdi-google-downasaur"
                    color="white"
                    variant="outlined"
                    @click="googleAccess"
                    v-if="!userGoogle"
                    >Acceder</v-btn
                >
                <v-btn
                    prepend-icon="mdi-google-downasaur"
                    color="white"
                    variant="outlined"
                    @click="logout"
                    v-if="userGoogle"
                    >Salir</v-btn
                >
            </template>
        </v-app-bar>

        <v-main app v-if="userGoogle !== false">
            <v-container>
                <Chat v-if="userGoogle" />
                <div v-else>
                    <h1 class="text-center mt-15">
                        Debes iniciar sesión para ver los chat
                    </h1>
                </div>
            </v-container>
        </v-main>

        <v-footer class="d-flex flex-column" app v-if="userGoogle">
            <FormAdd />
        </v-footer>
    </v-app>
</template>

<script setup>
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "@firebase/auth";
import { auth } from "./firebase";
import { ref } from "vue";

import Chat from "./components/Chat.vue";
import FormAdd from "./components/FormAdd.vue";

const userGoogle = ref(false);

const googleAccess = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        // console.log(user);
    } catch (error) {
        console.log(error);
    }
};

const logout = async () => {
    await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
    console.log("desde onAuthStateChanged: ", user);
    userGoogle.value = user;
});
</script>
