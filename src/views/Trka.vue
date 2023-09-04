<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins, faSuitcaseMedical, faXmark, faArrowRightArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default{
    data() {
        return {
            sertifikat: false,
            menu: false,
        }
    },
    components: {
        FontAwesomeIcon,
        Footer
    },
    
    mounted() {
        window.scrollTo(0, 0);
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
        <li class="navLink">Događaji</li>
        <li class="navLink">Rezultati</li>
        <li class="navLink" @click="this.$router.push('/kontakt')">Kontakt</li>
        <li class="navLink prijava"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">Prijava</a></span></li>
        <li class="language">
            <img class="lang" src="https://www.countryflagicons.com/SHINY/64/RS.png">
            <FontAwesomeIcon class="changeLang" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
            <img class="lang" src="https://www.countryflagicons.com/SHINY/64/US.png">  
        </li>
    </ul>
    </nav>
    <div class="nav2">
        <div class="menu">
            <div class="menuWrapper">
                <p class="nav2Header"><img class="logo2" src="../assets/logo.png" alt="" @click="this.$router.push('/')"> Ulična trka Ečka</p>
                <FontAwesomeIcon @click="this.menu = !this.menu" class="bars" icon="fa-solid fa-bars"></FontAwesomeIcon>
            </div>
            <div class="dropDownMenu" v-if="this.menu">
                <p @click="this.menu = !this.menu" class="navLink2"><a href="#trke">Događaji</a>
                </p>
                <p @click="this.menu = !this.menu" class="navLink2">Rezultati</p>
                <p @click="this.menu = !this.menu; this.$router.push('/kontakt')" class="navLink2">Kontakt</p>
                <p @click="this.menu = !this.menu" class="navLink2 prijava2"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">Prijava</a></span></p>
                <div class="lang2" @click="this.menu = !this.menu">
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
<h2 class="paketHeading">Učesnički paket</h2>
<div class="ucesnickiPaket">
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-microchip"></FontAwesomeIcon>
        <p>Startni broj sa čipom, elektronsko merenje vremena, elektronske diplome</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-money-check-dollar"></FontAwesomeIcon>
        <p>Novčane nagrade za pobednike</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-gift"></FontAwesomeIcon>
        <p>Pokloni i nagrade generalnog sponzora i organizatora trke</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-bottle-water"></FontAwesomeIcon>
        <p>Okrepa na stazi i cilju</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-medal"></FontAwesomeIcon>
        <p>Unikatna finišerska medalja</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-coins"></FontAwesomeIcon>
        <p>Bon za sendvič, bon za pivo</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-camera"></FontAwesomeIcon>
        <p>Profesinalne slike</p>
    </div>
    <div class="paket">
        <FontAwesomeIcon class="paketiIcons" icon="fa-solid fa-suitcase-medical"></FontAwesomeIcon>
        <p>Medicinsko osoblje na stazi i cilju</p>
    </div>
</div>
<div class="trkeInfoWrapper">
    <div class="vrsteTrka">
        <div class="trkeInfo">
            <h2 class="trkeInfoHeader">Informacije o događaju</h2>
            <p><span class="bold">Trke:</span> Dečija trka, 5km, štafetna trka (5km x 2), 10km (5km x 2)</p>
            <p><span class="bold">O stazi:</span> Staza je dugačka 5km, kružna i 100% ravna što je čini idealnom za obaranje vaših ličnih rekorda koji će biti validni i verodostojni svugde jer je staza <span class="sertifikat" @click="this.sertifikat = !this.sertifikat">SERTIFIKOVANA A licencom (sertifikatom)</span>. Svedok tome je drugo izdanje Ulične trke Ečka gde su postignuti najbrži rezultati u Srbiji 2022. godine na trci od 10km (ženski i muški).</p>
            <p><span class="bold">Mesto:</span> Zrenjanin, Ečka, Kaštel Ečka, sa početkom od 16h (glavna trka)</p>
            <p><span class="bold">Organizator takmičenja:</span> Sportsko udruženje „Ulična trka Ečka“ u saradnji sa MZ EČKA i gradom Zrenjaninom</p>
            <p><span class="bold">Preuzimanje startnih paketa:</span> Petak 27.10.2023 od 17h do 20h u prostorijama Kaštela Ečka.
            Na dan trke prezimanje traje od 12h do 14:30h kako bi se izbegla gužva, mole se svi učesnici da dođu ranije.</p>
            <p class="starosneKategorije bold">STAROSNE KATEGORIJE U TRCI NA 10KM:</p>
            <p>Kategorije muškarci/žene
            <span class="kategorije">M/Ž 29- <br>
            M/Ž 30-39 <br>
            M/Ž 40-49 <br>
            M/Ž 50-59 <br>
            M/Ž 60-69 <br>
            M/Ž 70 +</span></p>
        </div>
        <div class="carouselWrapper">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="../assets/slika1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/heroProba2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/heroProba2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slika2.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="trkeInfo2">
            <p><span class="bold">Cene:</span></p>
            <p>28.04.2023 - 31.05.2023 -> 2000 dinara</p>
            <p>01.06.2023 - 30.09.2023 -> 2200 dinara</p>
            <p>01.10.2023 - 20.10.2023 -> 2400 dinara (uplata iznosa startnine najkasnije do 16:00 časova 20.10.2023)</p>
            <p><span class="bold">STARTNINA ZA ŠTAFETNU TRKU:</span> po takmičaru 2000 posle promo perioda 2200 dinara, kasne prijave 2400.</p>
            <p><span class="bold">UPLATA STARTNINE ZA TAKMIČARE ISKLJUČIVO NA RAČUN SPORTSKOG UDRUŽENJA „EČKA“</span> do 20.10.2023. godine (posle 20.10. prijave neće biti moguće) na dan trke je postoji mogućnost kupiti samo startni broj bez paketa u zavisnosti od broja prijavljenih učesnika, organizator će najaviti da li će biti moguće ili ne.
            Svi prijavljeni takmičari će podatke za uplatu dobiti na portalu trka.rs nakom popunjenog prijavnog formulara.</p>
            <p>Povodom akcije <span class="bold">SPORTOM ZA BOLJE SUTRA</span>, koju podržava Ulična trka Ečka, deo od svake kotizacije ide u humanitarne svrhe! </p>
            <p><span class="bold">*Biće obezbeđen prevoz iz Beograda za trkače, bićete detaljno obavešteni.</span></p>
        </div>
    </div>
    <div class="decijaTrkaWrapper">
        <video class="decijaTrkaVideo" controls muted>
            <source src="../assets/decijatrka.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="decijaTrka">
            <h2 class="decijaTrkaHeading">Dečija trka</h2>
            <p>Start dečijih trka je od 14h pred početak glavne trke, kao i prošle godine.</p>
            <p>Trudićemo se da i ove godine naši mališani učestvuju potpuno besplatno i da najbolji dobiju nagrade, a sva deca medalje i poklone.</p>
            <p>Dečije trke - discipline:</p>
            <p>- Devojčice/Dečaci - 1/2 razred 200 metara <br>
            - Devojčice/Dečaci - 3/4 razred 300 metara <br> 
            - Devojčice/Dečaci - 5/6 razred 300 metara <br>
            - Devojčice/Dečaci - 7/8 razred 400 metara</p>
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
}
.carouselWrapper{
    flex-basis: 45%;
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
        background-color: #4A90E2;
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