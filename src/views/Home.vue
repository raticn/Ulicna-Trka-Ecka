<script>
import Footer from '../components/Footer.vue'

export default {
    components:{
        Footer,
    },
    mounted() {
    let countDownDate = new Date("Oct 28, 2023 13:00:00").getTime();

    let x = setInterval(function() {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".countDown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countDown").innerHTML = "EXPIRED";
        }
    }, 1000);
    }
    }

</script>

<template>
<div class="appWrapper">
    <div class="heroWrapper">
        <img src="../assets/heroProba.jpg" class="img-fluid" alt="Responsive image">
        <nav class="nav">
        <p class="logo">LOGO</p>
        <ul class="navLista">
            <li class="navLink">Događaji</li>
            <li class="navLink">Rezultati</li>
            <li class="navLink">Kontakt</li>
            <li class="navLink prijava"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">Prijava</a></span></li>
            <li class="navLink">SRB&lt;ENG</li>
        </ul>
        </nav>
        <p class="heroText">3. ULIČNA TRKA EČKA</p>
        <div class="datumTrke">SUBOTA, 28. Oktobar 2023.</div>
    </div>
    <div class="odbrojavanjeWrapper">
        <h2 class="countdownHeader">Vreme do trke:</h2>
        <p class="countDown"></p>
        <button class="countdownBtn"><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">PRIJAVI SE ODMAH!</a></button>
    </div>
    <div class="trkeWrapper">
        <div class="trka trka1">
            <p class="trkaNo">1. ULIČNA TRKA EČKA</p>
            <p class="trkaGod">2021</p>
            <div class="overlay"></div>
        </div>
        <div class="trka trka2">
        <p class="trkaNo">2. ULIČNA TRKA EČKA</p>
        <p class="trkaGod">2022</p>
        <div class="overlay"></div>
        </div>
        <div class="trka trka3" @click="this.$router.push('/trka')">
        <p class="trkaNo">3. ULIČNA TRKA EČKA</p>
        <p class="trkaGod">2023</p>
        <div class="overlay"></div>
        </div>
    </div>
    <div class="partneriTrke">
        <img class="decathlonImg" src="../assets/decathlon.jpg" alt="">
        <div class="decathlonText">
        <h3 class="decathlonHeading">Ponosno predstavljamo ovogodišnjeg generalnog partnera trke, kompaniju <span>DECATHLON</span></h3>
        <p class="decathlonParagraf">Decathlon je globalni lider u industriji sportske opreme, pružajući širok asortiman proizvoda i opreme za sve vaše sportske potrebe. Misija Decathlona je jednostavna - omogućiti svima da uživaju u sportu!</p>
        <p class="decathlonParagraf">Šta čini Decathlon posebnim? Strast za sportom! Decathlon nije samo prodavnica, već sportska zajednica koja je posvećena pružanju najboljih proizvoda i iskustava za sve sportiste, bez obzira na njihov nivo veštine ili interesovanja.</p>
        <p class="decathlonParagraf">Svi proizvodi su pažljivo dizajnirani i testirani kako bi pružili najbolje performanse, udobnost i izdržljivost.
        U Decathlonu veruju da kvalitetna sportska oprema ne bi trebala biti luksuz, već dostupna svima koji žele da se bave sportom.</p>
        <p class="decathlonParagraf">Nemojte čekati! Pridružite se Decathlon zajednici i pronađite sve što vam je potrebno da ostvarite svoje sportske snove. Bez obzira da li trčite, skijate, plivate ili igrate bilo koji drugi sport, Decathlon je tu da podrži vašu strast i pomogne vam da postignete vrhunske rezultate.</p>
        </div>
    </div>
    <div class="editTrkeWrapper">
        <h2 class="editTrkeHeader">Utisci sa prošlogodišnje trke</h2>
        <video class="editTrke" controls>
            <source src="../assets/editTrke.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="drugaTrkaPopup">
        
    </div>
</div>
<RouterView></RouterView>
<Footer/>
</template>

<style>
*{
margin: 0;
padding: 0;
font-family: Poppins;
}

/* ------------------------------------------HERO SECTION--------------------------------------- */

.heroWrapper{
position: relative;
}
.img-fluid{
width: 100%;
height: 95vh !important;
}
.nav{
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
color: #fff;
width: 100%;
}
.logo{
font-size: 3em;
padding: 0.2em 2em;
margin: 0;
}
.navLista{
display: flex;
margin: 0;
}
.navLink{
list-style: none;
font-size: 1.2em;
padding: 0.5em 1.5em;
cursor: pointer;
}
.fixed{
    position: fixed;
    background-color: rgb(255, 255, 255);
    color: #4A90E2;
    border-bottom: 1px solid #4A90E2;
    z-index: 10;
}
.prijava{
transform: skew(-20deg);
background-color: #4A90E2;
}
.prijava span{
display: block;
transform: skew(20deg);
}
.prijava a{
color: #fff;
text-decoration: none;
}
.heroText{
position: absolute;
right: 10%;
top: 20%;
font-size: 7em;
font-weight: 700;
color: #fff;
width: 5em;
text-align: center;
}
.datumTrke{
position: absolute;
left: 50%;
bottom: 0;
transform: translateX(-50%) translateY(50%);
padding: 0.2em 0.5em;
font-size: 3em;
background-color: #4A90E2;
color: #fff;
}
/* ---------------------------------------END OF HERO SECTION------------------------------------ */

/* ---------------------------------------------COUNTDOWN----------------------------------------- */

.odbrojavanjeWrapper{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin: 5em 0 0;
}
.countdownHeader{
font-size: 4em;
}
.countDown{
font-size: 6em;
}
.countdownBtn{
border: 4px solid #4A90E2;
background-color: #fff;
padding: 0.5em;
margin: 1em 0 2em 0;
font-size: 2em;
font-weight: 700;
}
.countdownBtn a{
text-decoration: none;
color: #000;
}
.countdownBtn:hover{
background-color: #4A90E2;
color: #fff;
cursor: pointer;
transition: all 0.3s;
}
.countdownBtn:hover a{
color: #fff;
}
/* ------------------------------------------END OF COUNTDOWN------------------------------------ */
/* -----------------------------------------------TRKE----------------------------------------- */

.trkeWrapper{
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 100%;
background-color: #f8f6f6;
}
.trka{
position: relative;
flex-basis: 22%;
border: 2px solid #fff;
font-weight: 700;
color: #fff;
margin: 4em 0;
background-position: center;
background-size: cover;
}
.trka1{
background-image: url("../assets/heroProba2.jpg");
}
.trka2{
background-image: url("../assets/trka.jpg");
}
.trka3{
background-image: url("../assets/slika.jpg");
}
.trkaNo{
position: relative;
z-index: 3;
font-size: 2em;
text-align: center;
padding: 3em 1em;
}
.trka:hover{
cursor: pointer;
border: 2px solid #4A90E2;
box-shadow: 0 0 10px #4A90E2;
}
.trkaGod{
position: relative;
z-index: 3;
text-align: center;
font-size: 2em;
}
.overlay {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
}

/* ------------------------------------------END OF TRKE-------------------------------------- */
/* ------------------------------------------PARTNERI------------------------------------------ */

.partneriTrke{
display: flex;
width: 100%;
justify-content: space-around;
padding: 4em 0;
}
.decathlonImg{
width: 40%;
}
.decathlonText{
display: flex;
flex-direction: column;
width: 45%;
}
.decathlonHeading{
font-size: 2em;
}
.decathlonHeading span{
color: #0679ba;
}
.decathlonParagraf{
padding: 0.5em 0;
}
/* ------------------------------------------END OF PARTNERI-------------------------------------- */
/* ------------------------------------------EDIT TRKE-------------------------------------- */

.editTrkeWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.editTrkeHeader{
    font-size: 4em;
    border-bottom: 3px solid #4A90E2;
}
.editTrke{
    margin: 2em 0;
    width: 80%;
}
/* ------------------------------------------END OF EDIT TRKE-------------------------------------- */
</style>
