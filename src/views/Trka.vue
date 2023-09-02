<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins, faSuitcaseMedical, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default{
    data() {
        return {
            sertifikat: false,
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
        library.add(faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins, faSuitcaseMedical, faXmark)
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
        <li class="navLink">Kontakt</li>
        <li class="navLink prijava"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">Prijava</a></span></li>
        <li class="navLink">SRB&lt;ENG</li>
    </ul>
    </nav>
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
        <div class="carouselWrapper">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="../assets/trka.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/heroProba.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/heroProba2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/slika.jpg" class="d-block w-100" alt="...">
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
    width: 70%;
    margin-top: 150px;
}
/* ------------------------------------END OF TRKE HERO-------------------------------------------- */
/* ------------------------------------UČESNIČKI PAKETI-------------------------------------------- */

.ucesnickiPaket{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.carouselWrapper{
    width: 40%;
}
.trkeInfo{
    width: 90%;
}
.trkeInfoHeader{
    font-size: 4em;
    text-align: center;
    margin: 0.5em 0;
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
    background-color: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 15;
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
    flex-basis: 45%;
}
.decijaTrkaHeading{
    font-size: 4em;
    text-align: center;
}
/* --------------------------------------END OF DEČIJA TRKA------------------------------------ */
</style>