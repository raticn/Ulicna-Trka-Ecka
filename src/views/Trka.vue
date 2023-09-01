<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
    components: {
        FontAwesomeIcon,
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    created() {
        library.add(faMicrochip, faCamera, faGift, faMedal, faBottleWater, faMoneyCheckDollar, faCoins)
    }
}
</script>

<template>
<div class="trkaHero">
    <nav class="nav fixed">
    <p class="logo">LOGO</p>
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
        <p>Robne nagrade, nagrade generalnog sponzora, pokloni generalnog sponzora, pokloni organizatora trke</p>
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
</div>

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
    flex-basis: 12%;
    font-size: 1.2em;
    color: #fff;
    padding: 0.5em;
}
.paketiIcons{
    font-size: 3em;
}

/* ------------------------------------END OF UČENSIČKI PAKETI-------------------------------------------- */
</style>