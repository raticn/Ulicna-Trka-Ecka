<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightArrowLeft, faBars, faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
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
        Footer,
        Nav
    },
    methods: {
        ...mapActions(useEckaStore, ['fetchText']),
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
    <div class="rekordiWrapper">
        <header>
            <Nav />
        </header>
        <h1 class="mainRezHeader">{{ this.shortText.naslRekordi }}</h1>
        <div class="rekordi">
            <h3>{{ this.shortText.p1Rek }}</h3>
            <div class="rekord">
                <p>{{ this.shortText.p2Rek }}</p>
                <img src="https://093g123.mars2.mars-hosting.com/API/pictures/92" alt="Slika trkaca">
            </div>
            <div class="rekord">
                <p>{{ this.shortText.p3Rek }}</p>
                <img src="https://093g123.mars2.mars-hosting.com/API/pictures/93" alt="Slika trkaca">
            </div>
        </div>
        <div class="rekordi">
            <h3>{{ this.shortText.p4Rek }}</h3>
            <div class="rekord">
                <p>{{ this.shortText.p5Rek }}</p>
                <img src="https://093g123.mars2.mars-hosting.com/API/pictures/94" alt="Slika trkaca">
            </div>
            <div class="rekord">
                <p>{{ this.shortText.p6Rek }}</p>
                <img src="https://093g123.mars2.mars-hosting.com/API/pictures/95" alt="Slika trkaca">
            </div>
        </div>
        <div class="rekordiText">
            <p>{{ this.longText.p7Rek }}</p>
            <p class="bold">{{ this.shortText.p8Rek }}</p>
        </div>
    </div>
    <Footer />
</template>

<style>
.rekordiWrapper .nav{
    position: fixed;
    background-color: rgb(255, 255, 255);
    color: #4A90E2;
    border-bottom: 1px solid #4A90E2;
    z-index: 10;
}
.rekordi{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 2em auto;
    flex-wrap: wrap;
}
.rekordi h3{
    width: 100%;
    margin: 1em 0;
    font-weight: 700;
}
.rekord{
    width: 45%;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    text-align: center;
}
.rekordiText{
    width: 90%;
    margin: 0 auto;
    font-size: 1.2em;
}

@media (max-width: 1500px) {
    .rekordiText, .rekord{
        font-size: 1em;
    }
    .rekordi h3{
        font-size: 1.3em;
    }
}

@media (max-width: 600px) {
    .rekordi{
        flex-direction: column;
    }
    .rekord{
        width: 90%;
        margin: 0 auto 3em;
    }
}
</style>