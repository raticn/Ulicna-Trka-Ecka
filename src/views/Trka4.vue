<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightArrowLeft, faBars, faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
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
        async fetchTrkePicures() {
            try {
                let slike = await axios.get('https://093g123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: "T3"
                    }
                })
                this.trke = slike.data.q
            } catch (error) {
                console.log(error);
            }
        },
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
    <div class="trka4Wrapper">
        <header>
            <Nav />
        </header>
        <h2 class="trka4Header">{{ this.shortText.trka4Info }}</h2>
        <p class="trka4Rez">
            {{ this.shortText.trka4Rez }}: <a href="https://www.facebook.com/ulicnatrkaecka" target="_blank" aria-label="Link do naše Facebook stranice"> trka.rs/events/479/</a>
        </p>
        <div class="propozicijeWrapper">
            <h3 class="trka4SubHeader">{{ this.shortText.propNaslov }}</h3>
            <p>{{ this.longText.propP1 }}</p>
            <p>{{ this.shortText.propP2 }} <span class="bold">{{ this.shortText.propP3 }}</span></p>
            <p>{{ this.shortText.propP4 }} <span class="bold">{{ this.shortText.propP5 }}</span></p>
            <p>{{ this.shortText.propP6 }}</p>
            <p>{{ this.longText.propP7 }}</p>
            <p>{{ this.longText.propP8 }} <a href="https://trka.rs/events/479/">{{ this.shortText.propP9 }}</a> {{ this.shortText.propP10 }}</p>
            <p>{{ this.shortText.propP11 }} <a href="https://trka.rs/events/479/">{{ this.shortText.propP9 }}</a> {{ this.shortText.propP12 }}</p>
            <p><span class="bold">{{ this.shortText.propP13 }}</span> {{ this.shortText.propP14 }}</p>
            <p class="bold">{{ this.shortText.propP15 }}</p>
            <p>{{ this.shortText.propP16 }}</p>
            <p>{{ this.shortText.propP17 }}</p>
            <p class="bold">{{ this.shortText.propP18 }}</p>
            <p>{{ this.shortText.propP19 }}</p>
            <p>{{ this.shortText.propP20 }}</p>
        </div>
        <div class="programWrapper">
            <h3 class="trka4SubHeader">{{ this.shortText.progP1 }}</h3>
            <p>{{ this.longText.progP2 }}</p>
            <p>{{ this.shortText.progP3 }}</p>
            <p>{{ this.shortText.progP4 }}</p>
            <p>{{ this.shortText.progP5 }}</p>
        </div>
        <div class="kategorijeWrapper">
            <h3 class="trka4SubHeader">{{ this.shortText.naslKateg }}</h3>
            <p>{{ this.shortText.p1kat }}</p>
            <div class="podelaKategorija">
                <div class="kategorija">
                    <p>{{ this.shortText.p2kat }}</p>
                    <p>{{ this.shortText.p3kat }}</p>
                    <p>{{ this.shortText.p4kat }}</p>
                    <p>{{ this.shortText.p5kat }}</p>
                    <p>{{ this.shortText.p6kat }}</p>
                    <p>{{ this.shortText.p7kat }}</p>
                    <p>{{ this.shortText.p8kat }}</p>
                </div>
                <div class="kategorija">
                    <p>{{ this.shortText.p9kat }}</p>
                    <p>{{ this.shortText.p10kat }}</p>
                    <p>{{ this.shortText.p11kat }}</p>
                    <p>{{ this.shortText.p12kat }}</p>
                    <p>{{ this.shortText.p13kat }}</p>
                    <p>{{ this.shortText.p14kat }}</p>
                    <p>{{ this.shortText.p15kat }}</p>
                </div>
                <img src="https://093g123.mars2.mars-hosting.com/API/pictures/103" alt="Slika pehara i medalja">
            </div>
            <p>{{ this.shortText.p16kat }}</p>
            <p>{{ this.shortText.p17kat }}</p>
        </div>
        <div class="decaWrapper">
            <h3 class="trka4SubHeader">{{ this.shortText.decaHeading }}</h3>
            <div class="decaTextWrapper">
                <p>{{ this.shortText.decaP1 }}</p>
                <p>{{ this.shortText.decaP2 }}</p>
                <p>{{ this.shortText.decaP3 }} <br> 
                {{ this.shortText.decijaDis1 }} <br>
                {{ this.shortText.decijaDis2 }}<br> 
                {{ this.shortText.decijaDis3 }} <br>
                {{ this.shortText.decijaDis4 }}</p>
                <p>{{ this.longText.decaP4 }}</p>
                <p>{{ this.shortText.decaP5 }}</p>
                <p>{{ this.shortText.decaP6 }} <span class="bold">{{ this.shortText.decaP7 }}</span></p>
            </div>
            <div id="carouselExampleCaptions5" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="https://093g123.mars2.mars-hosting.com/API/pictures/97" class="d-block w-100" alt="Ulicna trka Ecka slike">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="https://093g123.mars2.mars-hosting.com/API/pictures/98" class="d-block w-100" alt="Ulicna trka Ecka slike">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <img src="https://093g123.mars2.mars-hosting.com/API/pictures/99" class="d-block w-100" alt="Ulicna trka Ecka slike">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions5"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style>
.trka4Wrapper{
    width: 90%;
    margin: 0 auto;
}
.trka4Wrapper .nav{
    position: fixed;
    background-color: rgb(255, 255, 255);
    color: #4A90E2;
    border-bottom: 1px solid #4A90E2;
    z-index: 10;
}
.trka4Header{
    font-size: 3em;
    margin: 3em 0 1em 0;
    text-align: center
}
.trka4Rez{
    width: 40%;
    text-align: center;
    margin: 0 auto 50px;
    border: 5px dotted #4A90E2;
    padding: 20px 0;
    font-weight: 700;

}
.trka4SubHeader{
    font-size: 2.5em;
    text-align: center;
    margin: 1em 0;
}
.propozicijeWrapper p, .programWrapper p, .kategorijeWrapper p, .decaWrapper p{
    font-size: 1.2em;
}
.decaWrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3em
}
.decaTextWrapper{
    width: 45%
}
.decaWrapper h3{
    width: 100%;
}
.podelaKategorija{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.kategorija{
    width: 20%;
    text-align: center;
}
.podelaKategorija img{
    width: 50%;
}
#carouselExampleCaptions5{
    width: 50%;
    margin: 1em auto;
}
#carouselExampleCaptions5 img{
    width: 100%
}


@media (max-width: 1500px) {
    .propozicijeWrapper p, .programWrapper p, .kategorijeWrapper p, .decaWrapper p {
        font-size: 1em;
    }
}

@media (max-width: 600px) {
    .podelaKategorija{
        flex-wrap: wrap;
    }
    .trka4Rez{
        width: 90%;
    }
    .kategorija{
        width: 45%;
    }
    .podelaKategorija img{
        width: 90%;
        margin: 1em 0 2em 0;
    }
    .decaTextWrapper, #carouselExampleCaptions5{
        width: 90%;
        margin: 0 auto;
    }
}
</style>