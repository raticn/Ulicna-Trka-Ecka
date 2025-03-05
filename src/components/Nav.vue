<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import { useEckaStore } from '../stores/eckaStore'

export default {
    data() {
        return {
            menu: false,
        }
    },
    components: {
        FontAwesomeIcon,
    },
    methods: {
        ...mapActions(useEckaStore, ['fetchText']),
        changeLang() {
            if (localStorage.getItem("lang") == "sr") {
                localStorage.setItem("lang", "en")
                document.documentElement.lang = "en"
                location.reload()
            }
            else {
                localStorage.setItem("lang", "sr")
                document.documentElement.lang = "sr"
                location.reload()
            }
        },
    },
    computed: {
        ...mapState(useEckaStore, ['textObj', 'longText', 'lang', 'shortText']),
    },
    created() {
        library.add(faBars)
    }
}
</script>

<template>
    <nav>
        <div class="nav">
            <img class="logo" @click="this.$router.push('/')" src="../assets/logo.png" alt="Ulicna trka Ecka logo">
            <ul class="navLista">
                <li class="navLink" @click="this.$router.push('/onama')">{{ this.shortText.naslovOnama }}</li>
                <li class="navLink" @click="this.$router.push('/rezultati')">{{ this.shortText.rezultatinaslov }}</li>
                <li class="navLink" @click="this.$router.push('/rekordi')">{{ this.shortText.rekordiNav }}</li>
                <li class="navLink" @click="this.$router.push('/kontakt')">{{ this.shortText.kontaktnaslov }}</li>
                <li class="navLink prijava"><span><a aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/698-5-ulicna-trka-ecka/" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></li>
                <li class="language" @click="changeLang">
                    <img class="lang" src="../assets/srbija.webp" width="64" height="64" alt="Serbian flag image">
                    <FontAwesomeIcon class="changeLang" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                    <img class="lang" src="../assets/engleska.jpg" width="64" height="64" alt="English flag image">  
                </li>
            </ul>
        </div>
        <div class="nav2">
            <div class="menu">
                <div class="menuWrapper">
                    <p class="nav2Header"><img class="logo2" src="../assets/logo.png" alt="Ulicna trka Ecka logo" @click="this.$router.push('/')"> {{ this.shortText.nav2Naslov }}</p>
                    <FontAwesomeIcon @click="this.menu = !this.menu" class="bars" icon="fa-solid fa-bars"></FontAwesomeIcon>
                </div>
                <div class="dropDownMenu" v-if="this.menu">
                    <p @click="this.$router.push('/onama'); this.menu = !this.menu" class="navLink2">{{ this.shortText.naslovOnama }}</p>
                    <p @click="this.$router.push('/rezultati'); this.menu = !this.menu" class="navLink2">{{ this.shortText.rezultatinaslov }}</p>
                    <p @click="this.$router.push('/rekordi'); this.menu = !this.menu" class="navLink2">{{ this.shortText.rekordiNav }}</p>
                    <p @click="this.menu = !this.menu; this.$router.push('/kontakt')" class="navLink2">{{ this.shortText.kontaktnaslov }}</p>
                    <p @click="this.menu = !this.menu" class="navLink2 prijava2"><span><a aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/698-5-ulicna-trka-ecka/" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></p>
                    <div class="lang2" @click="changeLang(); this.menu = !this.menu">
                        <img class="langImg" src="../assets/srbija.webp" width="64" height="64" alt="Serbian flag image">
                        <FontAwesomeIcon class="langSw" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                        <img class="langImg" src="../assets/engleska.jpg" width="64" height="64" alt="English flag image">
                    </div>
                </div>
            </div>
        </div>
        </nav>
</template>