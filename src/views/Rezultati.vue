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
<nav class="nav fixed">
    <img class="logo" @click="this.$router.push('/')" src="../assets/logo.png" alt="Ulicna trka Ecka logo">
    <ul class="navLista">
        <li class="navLink">{{ this.shortText.dogadjajinaslov }}</li>
        <li class="navLink" @click="this.$router.push('/rezultati')">{{ this.shortText.rezultatinaslov }}</li>
        <li class="navLink" @click="this.$router.push('/kontakt')">{{ this.shortText.kontaktnaslov }}</li>
        <li class="navLink prijava"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></li>
        <li class="language" @click="changeLang">
            <img class="lang" src="https://www.countryflagicons.com/SHINY/64/RS.png" alt="Serbian flag image">
            <FontAwesomeIcon class="changeLang" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
            <img class="lang" src="https://www.countryflagicons.com/SHINY/64/US.png" alt="USA flag image">  
        </li>
    </ul>
    </nav>
    <div class="nav2">
        <div class="menu">
            <div class="menuWrapper">
                <p class="nav2Header"><img class="logo2" src="../assets/logo.png" alt="Ulicna trka Ecka logo" @click="this.$router.push('/')"> {{ this.shortText.nav2Naslov }}</p>
                <FontAwesomeIcon @click="this.menu = !this.menu" class="bars" icon="fa-solid fa-bars"></FontAwesomeIcon>
            </div>
            <div class="dropDownMenu" v-if="this.menu">
                <p @click="this.menu = !this.menu" class="navLink2"><a href="#trke">{{ this.shortText.dogadjajinaslov }}</a>
                </p>
                <p @click="this.$router.push('/rezultati'); this.menu = !this.menu" class="navLink2">{{ this.shortText.rezultatinaslov }}</p>
                <p @click="this.menu = !this.menu; this.$router.push('/kontakt')" class="navLink2">{{ this.shortText.kontaktnaslov }}</p>
                <p @click="this.menu = !this.menu" class="navLink2 prijava2"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></p>
                <div class="lang2" @click="changeLang(); this.menu = !this.menu">
                    <img class="langImg" src="https://www.countryflagicons.com/SHINY/64/RS.png" alt="Serbian flag image">
                    <FontAwesomeIcon class="langSw" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                    <img class="langImg" src="https://www.countryflagicons.com/SHINY/64/US.png" alt="USA flag image">
                </div>
            </div>
        </div>
    </div>
<div class="rezultatiWrapper">
    <div class="rezultati">
        <p class="rezultatiHeader">{{ this.shortText.prvaTrkaHeading }}</p>
        <p class="rezultatiGod">(2021)</p>
        <button class="rezBtn" @click="brojTrke(1); this.$router.push('/tabela')">5km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
        <button class="rezBtn" @click="brojTrke(2); this.$router.push('/tabela')">10km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
        <button class="rezBtn" @click="brojTrke(3); this.$router.push('/tabela')">{{ this.shortText.stafetaRez }} <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon><FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
    </div>
    <div class="rezultati">
        <p class="rezultatiHeader">{{ this.shortText.drugaTrkaHeading }}</p>
        <p class="rezultatiGod">(2022)</p>
        <button class="rezBtn" @click="brojTrke(5); this.$router.push('/tabela')">5km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
        <button class="rezBtn" @click="brojTrke(4); this.$router.push('/tabela')">10km <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
        <button class="rezBtn" @click="brojTrke(6); this.$router.push('/tabela')">{{ this.shortText.stafetaRez }} <FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon><FontAwesomeIcon icon="fa-solid fa-person-running"></FontAwesomeIcon></button>
    </div>
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