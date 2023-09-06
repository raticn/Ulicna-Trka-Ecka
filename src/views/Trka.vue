<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins, faSuitcaseMedical, faXmark, faArrowRightArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import axios from 'axios'

export default{
    data() {
        return {
            sertifikat: false,
            menu: false,
            lang: '',
            language: '',
            shortText: {},
            longText: {},
            trke: [],
        }
    },
    components: {
        FontAwesomeIcon,
        Footer
    },
    methods: {
        changeLang() {
            if (localStorage.getItem("lang") == "sr") {
                localStorage.setItem("lang", "en")
            }
            else {
                localStorage.setItem("lang", "sr")
            }
            this.fetchText()
        },
        async fetchText() {
            let language = localStorage.getItem("lang")
            try {
                let res = await axios.get('http://093g123.mars2.mars-hosting.com/API/text', {
                    params: {
                        language: language
                    }
                })
                this.language = res.data.trazeniTekst
                for (let item of this.language) {
                    this.shortText[item.tex_name] = item.tex_text
                    this.longText[item.tex_name] = item.tex_long
                }
            } catch (error) {
                console.log(error);
            }
        },
        async fetchTrkePicures() {
            try {
                let slike = await axios.get('http://093g123.mars2.mars-hosting.com/API/pictures', {
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
    async mounted() {
        window.scrollTo(0, 0);
        this.fetchText()
        this.fetchTrkePicures()
    },
    created() {
        library.add(faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins, faSuitcaseMedical, faXmark, faArrowRightArrowLeft, faBars)
    }
}
</script>

<template>
<div class="trkaHero">
    <nav class="nav fixed">
    <img class="logo" @click="this.$router.push('/')" src="../assets/logo.png" alt="">
    <ul class="navLista">
        <li class="navLink">{{ this.shortText.dogadjajinaslov }}</li>
        <li class="navLink" @click="this.$router.push('/rezultati')">{{ this.shortText.rezultatinaslov }}</li>
        <li class="navLink" @click="this.$router.push('/kontakt')">{{ this.shortText.kontaktnaslov }}</li>
        <li class="navLink prijava"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></li>
        <li class="language" @click="changeLang">
            <img class="lang" src="https://www.countryflagicons.com/SHINY/64/RS.png">
            <FontAwesomeIcon class="changeLang" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
            <img class="lang" src="https://www.countryflagicons.com/SHINY/64/US.png">  
        </li>
    </ul>
    </nav>
    <div class="nav2">
        <div class="menu">
            <div class="menuWrapper">
                <p class="nav2Header"><img class="logo2" src="../assets/logo.png" alt="" @click="this.$router.push('/')"> {{ this.shortText.nav2Naslov }}</p>
                <FontAwesomeIcon @click="this.menu = !this.menu" class="bars" icon="fa-solid fa-bars"></FontAwesomeIcon>
            </div>
            <div class="dropDownMenu" v-if="this.menu">
                <p @click="this.menu = !this.menu" class="navLink2"><a href="#trke">{{ this.shortText.dogadjajinaslov }}</a>
                </p>
                <p @click="this.$router.push('/rezultati'); this.menu = !this.menu" class="navLink2">{{ this.shortText.rezultatinaslov }}</p>
                <p @click="this.menu = !this.menu; this.$router.push('/kontakt')" class="navLink2">{{ this.shortText.kontaktnaslov }}</p>
                <p @click="this.menu = !this.menu" class="navLink2 prijava2"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></p>
                <div class="lang2" @click="changeLang(); this.menu = !this.menu">
                    <img class="langImg" src="https://www.countryflagicons.com/SHINY/64/RS.png">
                    <FontAwesomeIcon class="langSw" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                    <img class="langImg" src="https://www.countryflagicons.com/SHINY/64/US.png">
                </div>
            </div>
        </div>
    </div>
    <video class="trkaVideo" controls muted autoplay>
        <source src="../assets/trkaVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</div>
<h2 class="paketHeading">{{ this.shortText.paketHeading }}</h2>
<div class="ucesnickiPaket">
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-microchip"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp1 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-money-check-dollar"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp2 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-gift"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp3 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-bottle-water"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp4 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-medal"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp5 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-coins"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp6 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-camera"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp7 }}</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-suitcase-medical"></FontAwesomeIcon>
        <p>{{ this.shortText.paketp8 }}</p>
    </div>
</div>
<div class="trkeInfoWrapper">
    <div class="vrsteTrka">
        <div class="trkeInfo">
            <h2 class="trkeInfoHeader">{{ this.shortText.trkeInfoHeader }}</h2>
            <p><span class="bold">{{ this.shortText.trkeSpan1 }} </span>  {{ this.shortText.trkeInfo1 }}</p>
            <p><span class="bold">{{ this.shortText.trkeSpan2 }}</span> {{ this.shortText.trkeInfo21 }} <span class="sertifikat" @click="this.sertifikat = !this.sertifikat"> {{ this.shortText.trkeInfo22 }} </span> {{ this.shortText.trkeInfo23 }}</p>
            <p><span class="bold">{{ this.shortText.trkeSpan3 }}</span> {{ this.shortText.trkeInfo3 }}</p>
            <p><span class="bold">{{ this.shortText.trkeSpan4 }}</span> {{ this.shortText.trkeInfo4 }}</p>
            <p><span class="bold">{{ this.shortText.trkeSpan5 }}</span> {{ this.shortText.trkeInfo5 }}</p>
            <p class="starosneKategorije bold">{{ this.shortText.starosneKategorije }}</p>
            <p>{{ this.shortText.kategorijeP }}
            <span class="kategorije">{{ this.shortText.kategorija1 }} <br>
            {{ this.shortText.kategorija2 }} <br>
            {{ this.shortText.kategorija3 }} <br>
            {{ this.shortText.kategorija4 }} <br>
            {{ this.shortText.kategorija5 }} <br>
            {{ this.shortText.kategorija6 }}</span></p>
        </div>
        <div class="carouselWrapper">
            <div id="carouselExampleCaptions4" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div v-for="(img, index) in trke" :key="index" class="carousel-item"
                        :class="{ 'active': index === 0 }" data-bs-interval="5000">
                        <img :src="img.files_imageURL" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions4"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions4"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="trkeInfo2">
            <p><span class="bold">{{ this.shortText.trkeSpan6 }}</span></p>
            <p>{{ this.shortText.trkeInfo61 }}</p>
            <p>{{ this.shortText.trkeInfo62 }}</p>
            <p>{{ this.shortText.trkeInfo63 }}</p>
            <p><span class="bold">{{ this.shortText.trkeSpan7 }}</span> {{ this.shortText.trkeInfo7 }}</p>
            <p><span class="bold">{{ this.shortText.trkeSpan8 }}</span> {{ this.longText.trkeInfo8 }}</p>
            <p>{{ this.shortText.trkeInfo91 }} <span class="bold">{{ this.shortText.trkeSpan9 }}</span>{{ this.shortText.trkeInfo92 }}</p>
            <p><span class="bold">{{ this.shortText.trkeInfo10 }}</span></p>
        </div>
    </div>
    <div class="decijaTrkaWrapper">
        <video class="decijaTrkaVideo" controls muted>
            <source src="../assets/decijatrka.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="decijaTrka">
            <h2 class="decijaTrkaHeading">{{ this.shortText.decijaTrkaHeading }}</h2>
            <p>{{ this.shortText.decijaTrkaP1 }}</p>
            <p>{{ this.shortText.decijaTrkaP2 }}</p>
            <p>{{ this.shortText.decijaTrkaDis }}</p>
            <p>{{ this.shortText.decijaDis1 }} <br>
            {{ this.shortText.decijaDis2 }}<br> 
            {{ this.shortText.decijaDis3 }} <br>
            {{ this.shortText.decijaDis4 }}</p>
        </div>
    </div>
</div>
<div class="sertifikatPopup" v-if="this.sertifikat">
    <FontAwesomeIcon @click="this.sertifikat = !this.sertifikat" class="xmark" icon="fa-solid fa-xmark"></FontAwesomeIcon>
    <img class="sertifikat" src="../assets/sertifikat1.jpg" alt="">
    <img class="sertifikat" src="../assets/sertifikat2.jpg" alt="">
</div>
<Footer/>
</template>

<style>
/* ----------------------------------------TRKE HERO-------------------------------------------- */
.trkaHero{
    display: flex;
    width: 100%;
    justify-content: center;
}
.trkaVideo{
    width: 80%;
    margin-top: 150px;
}
/* ------------------------------------END OF TRKE HERO-------------------------------------------- */
/* ------------------------------------UČESNIČKI PAKETI-------------------------------------------- */

.ucesnickiPaket{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: #4A90E2;
    margin: 1em 0 2em;
}
.paketHeading{
    font-size: 4em;
    width: 100%;
    padding: 1em 0 0;
    text-align: center;
    color: #4A90E2;
}
.paket{
    flex-basis: 22%;
    font-size: 1.2em;
    color: #fff;
    padding:1em  0.5em;
}
.paketiIcons{
    font-size: 3em;
}

/* ----------------------------END OF UČENSIČKI  PAKETI--------------------------------- */
/* ------------------------------------------VRSTE TRKE-------------------------------------------- */

.vrsteTrka{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.carouselWrapper{
    flex-basis: 45%;
    margin-left: 1em;
}
.trkeInfo{
    flex-basis: 45%;
}
.trkeInfo2{
    flex-basis: 90%;
}
.trkeInfoHeader{
    font-size: 4em;
    text-align: center;
    margin-bottom: 0.5em;
}
.sertifikat{
    color: #0001d9;
    cursor: pointer;
    text-decoration: underline;
}
.bold{
    font-weight: 700;
    font-size: 1.1em;
}
.starosneKategorije{
    margin: 0;
}
.kategorije{
    display: flex;
}
/* --------------------------------------END OF VRSTE TRKE---------------------------------------- */
/* --------------------------------------SERTIFIKAT POPUP---------------------------------------- */

.sertifikatPopup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 25;
}
.sertifikat{
    flex-basis: 45%;
}
.xmark{
    position: fixed;
    top: 0.5em;
    right: 0.5em;
    font-size: 3em;
    color: #fff;
    cursor: pointer;
}
/* -------------------------------------END OF SERTIFIKAT POPUP------------------------------- */
/* ------------------------------------------DEČIJA TRKA------------------------------------ */

.decijaTrkaWrapper{
    display: flex;
    justify-content: space-evenly;
    margin: 3em 0;
}
.decijaTrkaVideo, .decijaTrka{
    width: 45%;
}
.decijaTrkaHeading{
    font-size: 4em;
    text-align: center;
}
/* --------------------------------------END OF DEČIJA TRKA------------------------------------ */
/* --------------------------------------RESPONSIVE DESIGN------------------------------------ */

@media (max-width: 1700px) {
    .sertifikat{
        width: 40%;
    }
}

@media (max-width: 1400px) {
    .sertifikat{
        width: 45%;
    }
}

@media (max-width: 1000px) {
    .vrsteTrka{
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
    }
    .decijaTrkaWrapper{
        flex-direction: column-reverse;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }
    .decijaTrka, .decijaTrkaVideo{
        width: 90%;
        margin-bottom: 1em;
    }
    .trkaVideo{
        width: 90%;
    }
    .trkeInfo p, .trkeInfo2 p, .decijaTrka p{
        font-size: 1.1em;
    }
}

@media (max-width: 1024px) and (max-height: 1370px) {
    .sertifikatPopup{
        flex-direction: column;
        overflow-y: scroll;
    }
    .sertifikat{
        width: 80%;
        margin-top: 2em;
    }
    .nav{
        display: none;
    }
    .nav2 {
        display: flex;
        align-items: center;
        position: fixed;
        border-bottom: 1px solid #4A90E2;
        top: 0;
        width: 100vw;
        z-index: 20;
    }

    .menu {
        align-items: center;
        width: 100vw;
        background-color: #fff;
    }

    .menuWrapper {
        display: flex;
        align-items: center;
    }

    .bars {
        font-size: 2em;
        padding: 0.7em 0.5em 0.7em 0;
        flex-basis: 5%;
    }

    .nav2Header {
        font-size: 1.5em;
        margin: 0;
        flex-basis: 95%;
        text-align: center;
        font-weight: 700;
    }
    .dropDownMenu {
        background-color: #fff;
    }

    .navLink2 {
        font-size: 1.3em;
        padding: 0.5em 1em;
    }

    .navLink2 a {
        text-decoration: none;
        color: #000;
    }

    .navLink2:hover a {
        text-shadow: 0 0 10px #000;
    }
    .logo2 {
        width: 3em;
        margin: 0;
    }
    .lang2{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .langImg{
        width: 3em;
    }
    .langSw{
        font-size: 2em;
    }
    .prijava2{
        font-weight: 700;
    }
}

@media (max-width: 600px) {
    .trkaVideo{
        margin-top: 100px;
        width: 90%;
    }
    .paketHeading, .trkeInfoHeader, .decijaTrkaHeading{
        font-size: 2.5em;
    }
    .paket{
        flex-basis: 45%;
    }
    .sertifikatPopup{
        flex-direction: column;
        overflow-y: scroll;
    }
    .sertifikat{
        width: 90%;
        margin-top: 2em;
    }
}

</style>