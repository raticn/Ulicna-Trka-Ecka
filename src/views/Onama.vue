<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
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
        library.add(faArrowRightArrowLeft, faBars, faPersonRunning, faYoutube)
    }
}
</script>

<template>
    <div class="onamaWrapper">
        <header>
            <Nav />
        </header>
        <h1 class="mainRezHeader">{{ this.shortText.naslovOnama }}</h1>
        <p class="onamaText">{{ this.longText.tekstOnama }}</p>
        <section>
            <div class="onamaTrke">
                <h2>{{ this.shortText.naslTrke }}</h2>
                <div class="onamaTrka">
                    <div class="onamaTrkaInfo">
                        <h3>{{ this.shortText.prvaTrkaHeading }}</h3>
                        <p>{{ this.longText.tekstPrva }}</p>
                        <p class="prvaTrkaParagraf trkaLink" @click="this.$router.push('/rezultati')">{{ this.shortText.trka1poprez }}</p>
                        <div class="ytWrapper"><a aria-label="Pogledajte video prve trke na YouTube-u" href="https://youtu.be/P6kK6lt81E4?si=GEsAHkMsHU5yfD_m" class="prvaTrkaParagraf" target="_blank">{{ this.shortText.trka1poppogledaj }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
                    </div>
                    <img class="onamaImg" src="https://093g123.mars2.mars-hosting.com/API/pictures/102" alt="1. Ulicna trka Ecka - medalja">
                </div>
                <div class="onamaTrka">
                    <div class="onamaTrkaInfo">
                        <h3>{{ this.shortText.drugaTrkaHeading }}</h3>
                        <p>{{ this.longText.tekstDruga }}</p>
                        <p class="drugaTrkaParagraf trkaLink" @click="this.$router.push('/rezultati')">{{ this.shortText.trka2poprez }}</p>
                        <div class="ytWrapper"><a aria-label="Pogledajte video druge trke na YouTube-u" href="https://youtu.be/blSz_Dvg7Ro?si=U4Xlgl20OfWBG45C" class="drugaTrkaParagraf" target="_blank">{{ this.shortText.trka2poppogledaj }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
                    </div>
                    <img class="onamaImg" src="https://093g123.mars2.mars-hosting.com/API/pictures/101" alt="2. Ulicna trka Ecka - medalja">
                </div>
                <div class="onamaTrka">
                    <div class="onamaTrkaInfo">
                        <h3>{{ this.shortText.trecaTrkaHeading }}</h3>
                        <p>{{ this.longText.tekstTreca }}</p>
                        <p class="prvaTrkaParagraf trkaLink" @click="this.$router.push('/rezultati')">{{ this.shortText.rezTreceTrke }}</p>
                        <div class="ytWrapper"><a aria-label="Pogledajte video prve trke na YouTube-u" href="https://youtu.be/WQ4H_po9qRM?si=x_Ii3yG-FNptWJJ0" class="prvaTrkaParagraf" target="_blank">{{ this.shortText.pogledTreca }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
                    </div>
                    <img class="onamaImg" src="https://093g123.mars2.mars-hosting.com/API/pictures/100" alt="3. Ulicna trka Ecka - medalja">
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<style>
.onamaWrapper .nav{
    position: fixed;
    background-color: rgb(255, 255, 255);
    color: #4A90E2;
    border-bottom: 1px solid #4A90E2;
    z-index: 10;
}
.onamaText{
    width: 90%;
    margin: 2em auto;
    font-size: 1.2em;
    line-height: 1.8em;
}
.onamaTrke{
    width: 90%;
    margin: 1em auto;
}
.onamaTrke h2{
    font-size: 3em;
    text-align: center;
    margin-bottom: 1em;
}
.onamaTrka{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 3em 0;
}
.onamaTrka:nth-of-type(2){
    flex-direction: row-reverse;
}
.onamaTrkaInfo, .onamaImg{
    width: 45%;
}
.onamaTrkaInfo h3{
    text-align: center;
    margin-bottom: 1em;
}
.onamaTrkaInfo p{
    font-size: 1.2em;
    line-height: 1.8em;
}

@media (max-width: 1500px) {
    .onamaText, .onamaTrkaInfo p{
        font-size: 1em;
    }
}

@media (max-width: 600px) {
    .onamaTrke h2{
        font-size: 2.5em
    }
    .onamaTrka{
        flex-direction: column;
    }
    .onamaTrka:nth-of-type(2){
        flex-direction: column;
    }
    .onamaTrkaInfo, .onamaImg {
        width: 90%;
        text-align: center;
    }
    .onamaImg{
        margin: 2em 0;
    }
}
</style>