<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightArrowLeft, faBars, faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

export default {
    data() {
        return {
            menu: false,
            lang: '',
            language: '',
            shortText: {},
            longText: {},
        }
    },
    components: {
        FontAwesomeIcon,
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
                let res = await axios.get('https://093g123.mars2.mars-hosting.com/API/text', {
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
        brojTrke(x) {
            localStorage.setItem('trka', x)
        }
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
<h2 class="mainRezHeader">{{ this.shortText.rezHeader }}</h2>
<header>
    <nav>
        <div class="nav fixed">
            <img class="logo" @click="this.$router.push('/')" src="../assets/logo.png" alt="Ulicna trka Ecka logo">
            <ul class="navLista">
                <li class="navLink" @click="this.$router.push('/rezultati')">{{ this.shortText.rezultatinaslov }}</li>
                <li class="navLink" @click="this.$router.push('/kontakt')">{{ this.shortText.kontaktnaslov }}</li>
                <li class="navLink prijava"><span><a aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/479/" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></li>
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
                    <p @click="this.$router.push('/rezultati'); this.menu = !this.menu" class="navLink2">{{ this.shortText.rezultatinaslov }}</p>
                    <p @click="this.menu = !this.menu; this.$router.push('/kontakt')" class="navLink2">{{ this.shortText.kontaktnaslov }}</p>
                    <p @click="this.menu = !this.menu" class="navLink2 prijava2"><span><a aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/479/" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></p>
                    <div class="lang2" @click="changeLang(); this.menu = !this.menu">
                        <img class="langImg" src="../assets/srbija.webp" width="64" height="64" alt="Serbian flag image">
                        <FontAwesomeIcon class="langSw" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                        <img class="langImg" src="../assets/engleska.jpg" width="64" height="64" alt="English flag image">
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<div class="rezultatiWrapper">
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

</template>

<style>
.rezultatiWrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.rezultati{
    width: 40%;
    margin: 2% auto 0;
    text-align: center;
}
.mainRezHeader{
    width: 5em;
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