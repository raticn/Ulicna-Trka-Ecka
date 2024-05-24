<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightArrowLeft, faBars, faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
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
        Nav,
        Footer
    },
    methods: {
        ...mapActions(useEckaStore, ['fetchText']),
        brojTrke(x) {
            localStorage.setItem('trka', x)
        }
    },
    computed: {
        ...mapState(useEckaStore, ['textObj', 'longText', 'lang', 'shortText']),
    },
    async mounted() {
        window.scrollTo(0, 0);
        this.fetchText()
    },
    created() {
        library.add(faArrowRightArrowLeft, faBars, faPersonRunning)
    }
}
</script>

<template>
<h1 class="mainRezHeader">{{ this.shortText.rezHeader }}</h1>
<div class="rezultatiWrapper">
    <header>
        <Nav />
    </header>
    <section class="rezultati">
            <p class="rezultatiHeader">{{ this.shortText.prvaTrkaHeading }}</p>
            <p class="rezultatiGod">(2021)</p>
            <button class="rezBtn" @click="brojTrke(1); this.$router.push('/tabela')" aria-label="Rezultati trke od 5km - 2021. godina">5km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
            <button class="rezBtn" @click="brojTrke(2); this.$router.push('/tabela')" aria-label="Rezultati trke od 10km - 2021. godina">10km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
            <button class="rezBtn" @click="brojTrke(3); this.$router.push('/tabela')" aria-label="Rezultati stafetne trke - 2021. godina">{{ this.shortText.stafetaRez }} <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon><FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
    </section>
    <section class="rezultati">
            <p class="rezultatiHeader">{{ this.shortText.drugaTrkaHeading }}</p>
            <p class="rezultatiGod">(2022)</p>
            <button class="rezBtn" @click="brojTrke(5); this.$router.push('/tabela')" aria-label="Rezultati trke od 5km - 2022. godina">5km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
            <button class="rezBtn" @click="brojTrke(4); this.$router.push('/tabela')" aria-label="Rezultati trke od 10km - 2022. godina">10km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
            <button class="rezBtn" @click="brojTrke(6); this.$router.push('/tabela')" aria-label="Rezultati stafetne trke - 2022. godina">{{ this.shortText.stafetaRez }} <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon><FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
    </section>
    <section class="rezultati">
            <p class="rezultatiHeader">{{ this.shortText.trecaTrkaHeading }}</p>
            <p class="rezultatiGod">(2023)</p>
            <button class="rezBtn" @click="brojTrke(7); this.$router.push('/tabela')" aria-label="Rezultati trke od 5km - 2023. godina">5km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
            <button class="rezBtn" @click="brojTrke(8); this.$router.push('/tabela')" aria-label="Rezultati trke od 10km - 2023. godina">10km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
            <button class="rezBtn" @click="brojTrke(9); this.$router.push('/tabela')" aria-label="Rezultati stafetne trke - 2023. godina">{{ this.shortText.stafetaRez }} <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon><FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
    </section>
</div>
<Footer />
</template>

<style>
.rezultatiWrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.rezultatiWrapper .nav{
    position: fixed;
    background-color: rgb(255, 255, 255);
    color: #4A90E2;
    border-bottom: 1px solid #4A90E2;
    z-index: 10;
}
.rezultati{
    width: 40%;
    margin: 2% auto 3em;
    text-align: center;
}
.mainRezHeader{
    width: 7em;
    font-size: 4em;
    margin: 2em auto 0;
    border-bottom: 3px solid #4A90E2;
    text-align: center;
}
.rezultatiHeader{
    font-size: 4em;
}
.rezultatiGod{
    font-size: 3em;
}
.rezBtn{
    border: none;
    background-color: #4A90E2;
    color: #fff;
    font-weight: 700;
    padding: 15px;
    border-radius: 20px;
    margin: 0.2em 0.5em;
    cursor: pointer;
}

@media (max-width: 1500px) {
    .rezultatiHeader{
        font-size: 3em;
    }
    .mainRezHeader{
        font-size: 3.5em;
    }
}

@media (max-width: 1000px) {
    .rezultatiWrapper{
        flex-direction: column;
    }
    .rezultati{
        margin: 5% auto;
        width: 90%;
    }
}

@media (max-width: 600px) {
    .mainRezHeader, .rezultatiHeader{
        font-size: 3em;
    }
    .rezultatiGod{
        font-size: 2em;
    }
}
</style>