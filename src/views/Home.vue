<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faArrowRightArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios'

export default {
    data() {
        return {
            prvaTrka: false,
            drugaTrka: false,
            menu: false,
            smallImage: false,
            lang: '',
            language: {},
            shortText: {},
            longText: {},
            heroMon: [],
            heroTel: [],
            popupImg: [],
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
        },
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
        async fetchPicures() {
            try {
                let slike = await axios.get('http://093g123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: 'heroMon'
                    }
                })
                this.heroMon = slike.data.q
            } catch (error) {
                console.log(error);
            }
        },
        async fetchMobPicures() {
            try {
                let slike = await axios.get('http://093g123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: 'heroTel'
                    }
                })
                this.heroTel = slike.data.q
            } catch (error) {
                console.log(error);
            }
        },
        async fetchTrkePicures(trka) {
            console.log(trka, 'trka');
            try {
                let slike = await axios.get('http://093g123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: trka
                    }
                })
                console.log(slike);
                this.popupImg = slike.data.q
            } catch (error) {
                console.log(error);
            }
        },
    },
    async mounted() {
    try {
        this.fetchText()
        this.fetchPicures()
        this.fetchMobPicures()
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
        if(window.screen.width <= 600) {
            document.querySelector(".rec1").classList.add("fromTop1Small")
            document.querySelector(".rec2").classList.add("fromTop2Small")
            document.querySelector(".rec3").classList.add("fromTop3Small")
            this.smallImage = true
        }
        else if(window.screen.width > 600 && window.screen.width < 1600) {
            document.querySelector(".rec1").classList.add("fromTop1")
            document.querySelector(".rec2").classList.add("fromTop2")
            document.querySelector(".rec3").classList.add("fromTop3")
            this.smallImage = false
        }
        else if(window.screen.width >= 1600) {
            document.querySelector(".rec1").classList.add("fromTop1Big")
            document.querySelector(".rec2").classList.add("fromTop2Big")
            document.querySelector(".rec3").classList.add("fromTop3Big")
            this.smallImage = false
        }
        localStorage.setItem('lang', 'sr')
    } catch (error) {
        console.log(error);
    }
    },
    created() {
        library.add(faYoutube, faXmark, faArrowRightArrowLeft, faBars)
    }
}

</script>

<template>
<div class="appWrapper">
    <div class="heroWrapper">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div v-for="(img, index) in heroMon" :key="index" class="carousel-item"
                        :class="{ 'active': index === 0 }" data-bs-interval="5000">
                        <img :src="img.files_imageURL" class="d-block w-100 carouselImg" alt="...">
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
        <nav class="nav">
        <img class="logo" src="../assets/logo.png" alt="">
        <ul class="navLista">
            <li class="navLink"><a href="#trke">{{ this.shortText.dogadjajinaslov }}</a></li>
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
                    <div class="lang2" @click="this.menu = !this.menu">
                        <img class="langImg" src="https://www.countryflagicons.com/SHINY/64/RS.png">
                        <FontAwesomeIcon class="langSw" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                        <img class="langImg" src="https://www.countryflagicons.com/SHINY/64/US.png">
                    </div>
                </div>
            </div>
        </div>
        <p class="heroText"><span class="rec1">{{ this.shortText.animeprva }}</span> <span class="rec2">{{ this.shortText.animedruga }}</span> <span class="rec3">{{ this.shortText.animetreca }}</span></p>
        <div class="datumTrke">{{ this.shortText.datumtrke }}</div>
    </div>
    <div class="odbrojavanjeWrapper">
        <h2 class="countdownHeader">{{ this.shortText.vreme }}</h2>
        <p class="countDown"></p>
        <button class="countdownBtn"><a href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.trk }}</a></button>
    </div>
    <div class="trkeWrapper" id="trke">
        <div class="trka trka1" @click="fetchTrkePicures('T1'); this.prvaTrka = !this.prvaTrka">
            <p class="trkaNo">{{ this.shortText.trka1naslov }}</p>
            <p class="trkaGod">{{ this.shortText.trka1god }}</p>
            <div class="overlay"></div>
        </div>
        <div class="trka trka2" @click="fetchTrkePicures('T2'); this.drugaTrka = !this.drugaTrka">
            <p class="trkaNo">{{ this.shortText.trka2naslov }}</p>
            <p class="trkaGod">{{ this.shortText.trka2god }}</p>
            <div class="overlay"></div>
        </div>
        <div class="trka trka3" @click="this.$router.push('/trka')">
            <p class="trkaNo">{{ this.shortText.trka3naslov  }}</p>
            <p class="trkaGod">{{ this.shortText.trka3god }}</p>
            <div class="overlay"></div>
        </div>
    </div>
    <div class="partneriTrke">
        <img class="decathlonImg" src="../assets/decathlon.jpg" alt="">
        <div class="decathlonText">
        <h3 class="decathlonHeading">{{ this.shortText.decathlonheading }} <span>{{ this.shortText.decathlonspan }}</span></h3>
        <p class="decathlonParagraf">{{ this.shortText.decp1 }}</p>
        <p class="decathlonParagraf">{{ this.shortText.decp2 }}</p>
        <p class="decathlonParagraf">{{ this.shortText.decp3 }}</p>
        <p class="decathlonParagraf">{{ this.longText.decp4 }}</p>
        </div>
    </div>
    <div class="editTrkeWrapper">
        <h2 class="editTrkeHeader">{{ this.shortText.editTrkeHeader }}</h2>
        <video class="editTrke" controls>
            <source src="../assets/editTrke.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <Transition @enter="enterAnimation" @leave="leaveAnimation">
    <div class="prvaTrkaWrapper" v-if="this.prvaTrka">
        <div class="prvaTrkaPopup">
            <div id="carouselExampleCaptions2" class="carousel slide carouselPopup" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div v-for="(img, index) in popupImg" :key="index" class="carousel-item"
                        :class="{ 'active': index === 0 }" data-bs-interval="5000">
                        <img :src="img.files_imageURL" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="prvaTrkaText">
                <h2 class="prvaTrkaHeading">{{ this.shortText.prvaTrkaHeading }}</h2>
                <p class="datumTrkePopup">{{ this.shortText.trka1popdate }}</p>
                <p class="prvaTrkaParagraf">{{ this.shortText.trka1popfinish }}</p>
                <p class="prvaTrkaParagraf">{{ this.longText.trka1popopis }}</p>
                <p class="prvaTrkaParagraf" @click="this.$router.push('/rezultati')"><a href="">{{ this.shortText.trka1poprez }}</a></p>
                <div class="ytWrapper"><a href="https://youtu.be/P6kK6lt81E4?si=GEsAHkMsHU5yfD_m" class="prvaTrkaParagraf" target="_blank">{{ this.shortText.trka1poppogledaj }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
            </div>
            <FontAwesomeIcon @click="this.prvaTrka = !this.prvaTrka" class="xmark" icon="fa-solid fa-xmark"></FontAwesomeIcon>
        </div>
    </div>
    </Transition>
    <Transition @enter="enterAnimation" @leave="leaveAnimation">
    <div class="drugaTrkaWrapper" v-if="this.drugaTrka">
        <div class="drugaTrkaPopup">
            <div id="carouselExampleCaptions3" class="carousel slide carouselPopup" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div v-for="(img, index) in popupImg" :key="index" class="carousel-item"
                        :class="{ 'active': index === 0 }" data-bs-interval="5000">
                        <img :src="img.files_imageURL" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="drugaTrkaText">
                <h2 class="drugaTrkaHeading">{{ this.shortText.drugaTrkaHeading }}</h2>
                <p class="datumTrkePopup">{{ this.shortText.trka2popdate }}</p>
                <p class="drugaTrkaParagraf">{{ this.shortText.trka2popfinish }}</p>
                <p class="drugaTrkaParagraf">{{ this.shortText.trka2popopis }}</p>
                <p class="drugaTrkaParagraf" @click="this.$router.push('/rezultati')"><a href="">{{ this.shortText.trka2poprez }}</a></p>
                <div class="ytWrapper"><a href="https://youtu.be/blSz_Dvg7Ro?si=U4Xlgl20OfWBG45C" class="drugaTrkaParagraf" target="_blank">{{ this.shortText.trka2poppogledaj }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
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
scroll-behavior: smooth;
}

/* ------------------------------------------HERO SECTION--------------------------------------- */

.heroWrapper{
position: relative;
}
.carouselImg{
width: 100%;
height: 95vh !important;
}
.nav2{
    display: none;
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
li a{
    color: #fff;
    text-decoration: none;
}
.logo{
    width: 5em;
    margin: 1em 0 1em 1em;
    cursor: pointer;
}
.navLista{
    display: flex;
    margin: 0;
    width: 90vw;
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
    margin-left: auto;
}
.lang{
    width: 3em;
}
.changeLang{
    font-size: 1.5em;
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
    right: 5%;
    top: -20%;
    font-size: 7em;
    font-weight: 700;
    color: #fff;
    width: 6em;
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
        font-size: 11em;
    }
    100%{
        top: 20%;
        font-size: 7em;
    }
}
@keyframes rec2 {
    0%{
        top: -20%;
        font-size: 11em;
    }
    100%{
        top: 40%;
        font-size: 7em;
    }
}
@keyframes rec3 {
    0%{
        top: -20%;
        font-size: 11em;
    }
    100%{
        top: 60%;
        font-size: 7em;
    }
}

.fromTop1Big{
    animation: rec1Big 2s forwards;
}
.fromTop2Big{
    animation: rec2Big 2s forwards 0.5s;
}
.fromTop3Big{
    animation: rec3Big 2s forwards 1s;
}
@keyframes rec1Big {
    0%{
        top: -20%;
        font-size: 12em;
    }
    100%{
        right: 2%;
        top: 20%;
        font-size: 9em;
    }
}
@keyframes rec2Big {
    0%{
        top: -20%;
        font-size: 12em;
    }
    100%{
        right: 2%;
        top: 40%;
        font-size: 9em;
    }
}
@keyframes rec3Big {
    0%{
        top: -20%;
        font-size: 12em;
    }
    100%{
        right: 2%;
        top: 60%;
        font-size: 9em;
    }
}
.fromTop1Small{
    animation: rec1Small 2s forwards;
}
.fromTop2Small{
    animation: rec2Small 2s forwards 0.5s;
}
.fromTop3Small{
    animation: rec3Small 2s forwards 1s;
}
@keyframes rec1Small {
    0%{
        left: 50%;
        top: -20%;
        font-size: 6em;
    }
    100%{
        transform: translateX(-50%) translateY(50%);
        left: 50%;
        top: 20%;
        font-size: 3em;
    }
}
@keyframes rec2Small {
    0%{
        left: 50%;
        top: -20%;
        font-size: 6em;
    }
    100%{
        transform: translateX(-50%) translateY(50%);
        left: 50%;
        top: 40%;
        font-size: 3em;
    }
}
@keyframes rec3Small {
    0%{
        left: 50%;
        top: -20%;
        font-size: 6em;
    }
    100%{
        transform: translateX(-50%) translateY(50%);
        left: 50%;
        top: 60%;
        font-size: 3em;
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
background-image: url("../assets/slika1.jpg");
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
.prvaTrkaPopup #carouselExampleCaptions button, .drugaTrkaPopup #carouselExampleCaptions button{
    background-color: rgba(0, 0, 0, 0.3);
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
    z-index: 30;
}
.drugaTrkaPopup, .prvaTrkaPopup{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 7% auto 0;
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
/* -------------------------------------RESPONSIVE DESIGN----------------------------------- */

@media (min-width: 1600px) and (max-width: 2199px) {
    .navLink{
        font-size: 1.4em;
    }
    .logo{
        width: 6em;
    }
    .lang{
        width: 3.5em;
    }
    .datumTrke{
        font-size: 3.5em;
    }
    .decathlonHeading{
        font-size: 2.5em;
    }
    .decathlonParagraf, .prvaTrkaParagraf, .drugaTrkaParagraf, .trkeInfo p, .trkeInfo2 p, .decijaTrka p{
        font-size: 1.2em;
    }
}

@media (min-width: 2200px) {
    .navLink{
        font-size: 1.8em;
    }
    .logo{
        width: 7em;
    }
    .lang{
        width: 4.5em;
    }
    .datumTrke{
        font-size: 4.5em;
    }
    .odbrojavanjeWrapper{
        margin: 7em 0 0;
    }
    .countdownHeader{
        font-size: 6em;
    }
    .decathlonHeading{
        font-size: 3.5em;
    }
    .decathlonParagraf{
        font-size: 1.8em;
    }
    .trka{
        flex-basis: 22%;
    }
    .trkaNo{
        font-size: 3em;
    }
    .trkaGod{
        font-size: 2.5em;
    }
    .prvaTrkaHeading, .drugaTrkaHeading{
        font-size: 6em;
    }
    .prvaTrkaParagraf, .drugaTrkaParagraf{
        font-size: 2em;
    }
    .editTrkeHeader{
        font-size: 5em;
    }
}

@media (max-width: 1350px) {
    .datumTrke{
        font-size: 2.5em;
    }
    .prvaTrkaHeading, .drugaTrkaHeading{
        font-size: 3em;
    }
    .trka{
        flex-basis: 27%;
    }
}

@media (max-width: 1000px) {
    .nav{
        flex-wrap: nowrap!important;;
    }
    .navLink{
        padding: 0.5em 1em;
    }
    .datumTrke{
        font-size: 2em;
    }
    .trka{
        flex-basis: 31%;
    }
    .prvaTrkaWrapper, .drugaTrkaWrapper{
        overflow-y: scroll;
    }
    .prvaTrkaPopup, .drugaTrkaPopup{
        flex-direction: column-reverse;
    }
    .prvaTrkaText, .drugaTrkaText, .carouselPopup{
        width: 90%;
        margin: 0 auto;
    }
    .prvaTrkaPopup .xmark, .drugaTrkaPopup .xmark{
        top: 1.5em;
        right: 1.5em;
        color: #000;
    }
    .prvaTrkaParagraf, .drugaTrkaParagraf, .decathlonParagraf{
        font-size: 1.1em;
    }
    .partneriTrke{
        flex-direction: column-reverse;
        align-items: center;
    }
    .decathlonText, .decathlonImg, .editTrkeHeader, .editTrke{
        width: 90%;
    }
    .editTrkeHeader{
        font-size: 3em;
        text-align: center;
    }
}

@media (max-width: 600px) {
    .nav{
        display: none !important;
    }
    .carouselImg{
        height: auto!important;
    }
    .datumTrke{
        font-size: 1.3em;
        width: 15em;
        text-align: center;
        padding: 0.5em;
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
    .editTrkeHeader{
        font-size: 2em;
    }
    .countdownHeader, .countDown{
        font-size: 2.5em;
    }
    .countdownBtn, .decathlonHeading{
        font-size: 1.5em;
    }
    .trka{
        flex-basis: 90%;
        margin: 2em 0;
    }
    .partneriTrke{
        flex-direction: column-reverse;
        align-items: center;
    }
    .decathlonText, .decathlonImg, .editTrkeHeader, .editTrke{
        width: 90%;
    }
    .editTrkeHeader{
        text-align: center;
    }
    .prvaTrkaWrapper, .drugaTrkaWrapper{
        overflow-y: scroll;
    }
    .prvaTrkaPopup, .drugaTrkaPopup{
        flex-direction: column-reverse;
    }
    .prvaTrkaText, .drugaTrkaText, .carouselPopup{
        width: 90%;
        margin: 0 auto;
    }
    .prvaTrkaPopup .xmark, .drugaTrkaPopup .xmark{
        top: 20px;
        color: #000;
    }
}

</style>
