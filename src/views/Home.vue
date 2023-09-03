<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faRepeat} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            prvaTrka: false,
            drugaTrka: false
        }
    },
    components: {
        FontAwesomeIcon,
        Footer,
    },
    methods: {
    enterAnimation(el, done) {
        el.style.transform = 'translateY(100%)';

        requestAnimationFrame(() => {
        el.style.transform = '';
        
        el.classList.add('slide-in');
        
        el.addEventListener('transitionend', done);
        });
    },
    leaveAnimation(el, done) {

        el.classList.add('slide-out');
        
        el.addEventListener('transitionend', () => {
        done();
        });
    }
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

    document.querySelector(".rec1").classList.add("fromTop1")
    document.querySelector(".rec2").classList.add("fromTop2")
    document.querySelector(".rec3").classList.add("fromTop3")
    },
    created() {
        library.add(faYoutube, faXmark, faRepeat)
    }
}

</script>

<template>
<div class="appWrapper">
    <div class="heroWrapper">
        <img src="../assets/hero.jpg" class="img-fluid" alt="Responsive image">
        <nav class="nav">
        <img class="logo" src="../assets/logo.png" alt="">
        <ul class="navLista">
            <li class="navLink">Događaji</li>
            <li class="navLink">Rezultati</li>
            <li class="navLink" @click="this.$router.push('/kontakt')">Kontakt</li>
            <li class="navLink prijava"><span><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">Prijava</a></span></li>
            <li class="language">
                <img class="lang" src="https://www.countryflagicons.com/SHINY/64/RS.png">
                <FontAwesomeIcon class="changeLang" icon="fa-solid fa-repeat"></FontAwesomeIcon>
                <img class="lang" src="https://www.countryflagicons.com/SHINY/64/US.png">  
            </li>
        </ul>
        </nav>
        <p class="heroText"><span class="rec1">3. ULIČNA</span> <span class="rec2">TRKA</span> <span class="rec3">EČKA</span></p>
        <div class="datumTrke">SUBOTA, 28. Oktobar 2023.</div>
    </div>
    <div class="odbrojavanjeWrapper">
        <h2 class="countdownHeader">Vreme do trke:</h2>
        <p class="countDown"></p>
        <button class="countdownBtn"><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">TRK PO SVOJE MESTO!</a></button>
    </div>
    <div class="trkeWrapper">
        <div class="trka trka1" @click="this.prvaTrka = !this.prvaTrka">
            <p class="trkaNo">1. ULIČNA TRKA EČKA</p>
            <p class="trkaGod">2021</p>
            <div class="overlay"></div>
        </div>
        <div class="trka trka2" @click="this.drugaTrka = !this.drugaTrka">
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
    <Transition @enter="enterAnimation" @leave="leaveAnimation">
    <div class="prvaTrkaWrapper" v-if="this.prvaTrka">
        <div class="prvaTrkaPopup">
            <div id="carouselExampleCaptions" class="carousel slide carouselPopup" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <img src="../assets/slika1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <!-- <div class="carousel-item">
                        <img src="../assets/heroProba.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/heroProba2.jpg" class="d-block w-100" alt="...">
                    </div> -->
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
            <div class="prvaTrkaText">
                <h2 class="prvaTrkaHeading">1. Ulična trka Ečka</h2>
                <p class="datumTrkePopup">(30.10.2021.)</p>
                <p> 400+ finišera na glavnoj trci</p>
                <p>U trci je učestvovalo dosta trkača iz susednih država te je trka dobila internacionalni karakter, kao i dosta naših reprezentativaca, veliki broj mališana u uzrastima od predškolaca pa do najstarnijih osnovaca. Naglasio bih da je trka za decu u potpunosti bila besplatna i da su svi mališani dobili startni paket, učesničku medalju i proglašenje najboljih isto kao i odrasli.</p>
                <p><a href="">REZULTATI 1. ULIČNE TRKE</a></p>
                <div class="ytWrapper"><a href="">Pogledajte kako je izgledala 1. Ulična trka Ečka </a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
            </div>
            <FontAwesomeIcon @click="this.prvaTrka = !this.prvaTrka" class="xmark" icon="fa-solid fa-xmark"></FontAwesomeIcon>
        </div>
    </div>
    </Transition>
    <Transition @enter="enterAnimation" @leave="leaveAnimation">
    <div class="drugaTrkaWrapper" v-if="this.drugaTrka">
        <div class="drugaTrkaPopup">
            <div id="carouselExampleCaptions" class="carousel slide carouselPopup" data-bs-ride="carousel" data-bs-interval="5000">
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
            <div class="drugaTrkaText">
                <h2 class="drugaTrkaHeading">2. Ulična trka Ečka</h2>
                <p class="datumTrkePopup">(29.10.2022.)</p>
                <p>Ove godine je bio rekordan broj prijava od 600 učesnika, na sam start trke je izašlo oko 500 ljudi, što je rekord u odnosu na prošlu godinu.</p>
                <p>U drugom izdanju Ulične trke Ečka su postignuti najbrži rezultati u Srbiji 2022. godine na trci od 10km (ženski i muški)!</p>
                <p><a href="">REZULTATI 2. ULIČNE TRKE</a></p>
                <div class="ytWrapper"><a href="">Pogledajte kako je izgledala 2. Ulična trka Ečka </a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
            </div>
            <FontAwesomeIcon @click="this.drugaTrka = !this.drugaTrka" class="xmark" icon="fa-solid fa-xmark"></FontAwesomeIcon>
        </div>
    </div>
    </Transition>
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
    width: 5em;
    margin: 1em 0 1em 1em;
    cursor: pointer;
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
.language{
    padding: 0 1.5em;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.lang{
    width: 3em;
}
.changeLang{
    font-size: 2em;
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
.rec1, .rec2, .rec3{
    position: absolute;
    right: 10%;
    top: -20%;
    font-size: 7em;
    font-weight: 700;
    color: #fff;
    width: 5em;
    text-align: center;
}
.fromTop1{
    animation: rec1 2s forwards;
}
.fromTop2{
    animation: rec2 2s forwards 0.5s;
}
.fromTop3{
    animation: rec3 2s forwards 1s;
}
@keyframes rec1 {
    0%{
        top: -20%;
        font-size: 10em;
    }
    100%{
        top: 20%;
        font-size: 7em;
    }
}
@keyframes rec2 {
    0%{
        top: -20%;
        font-size: 10em;
    }
    100%{
        top: 35%;
        font-size: 7em;
    }
}
@keyframes rec3 {
    0%{
        top: -20%;
        font-size: 10em;
    }
    100%{
        top: 50%;
        font-size: 7em;
    }
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
background-image: url("../assets/drugaTrka.jpg");
}
.trka3{
background-image: url("../assets/trecaTrka.jpg");
}
.trkaNo{
position: relative;
z-index: 3;
font-size: 2em;
text-align: center;
padding: 3em 1em;
margin: 0;
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
/* ------------------------------------------END OF EDIT TRKE------------------------------------ */
/* ----------------------------------------PRVA & DRUGA TRKA POPUP-------------------------------- */
.drugaTrkaWrapper, .prvaTrkaWrapper{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 20;
}
.drugaTrkaPopup, .prvaTrkaPopup{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 2% auto 0;
    background-color: #fff;
}
.carouselPopup{
    width: 50%;
}
.drugaTrkaText, .prvaTrkaText{
    width: 45%;
}
.drugaTrkaHeading, .prvaTrkaHeading{
    font-size: 4em;
    text-align: center;
    padding: 0.5em 0 0;
}
.datumTrkePopup{
    font-weight: 700;
    text-align: center;
    font-size: 2em;
}
.ytWrapper{
    display: flex;
    align-items: center;
}
.yt{
    font-size: 2em;
    color: red;
    margin-left: 0.2em;
}
.slide-in {
    transform: translateY(0);
    transition: transform 0.7s ease-out;
}

.slide-out {
    transform: translateY(100%);
    transition: transform 0.7s ease-in;
}
/* -----------------------------------END OF PRVA & DRUGA TRKA POPUP----------------------------- */
</style>
