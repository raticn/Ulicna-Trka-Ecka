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
            sponzoriArr: [],
            hero: [],
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
                document.documentElement.lang = "en"
            }
            else {
                localStorage.setItem("lang", "sr")
                document.documentElement.lang = "sr"
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
        async fetchPictures() {
            if(window.screen.width <= 600) {
                this.heroMon = "heroTel"
            }
            else if(window.screen.width > 600){
                this.heroMon = "heroMon"
            }
            try {
                let slike = await axios.get('https://093g123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: this.heroMon
                    }
                })
                this.heroTel = slike.data.q
                    this.hero = this.heroTel

            } catch (error) {
                console.log(error);
            }
        },
        async fetchTrkePicures(param) {
                try {
                    let slike = await axios.get('https://093g123.mars2.mars-hosting.com/API/pictures', {
                        params: {
                            fil_type: param
                        }
                    })
                    if(param == 'T1' || param == 'T2'){
                        this.popupImg = slike.data.q
                    }
                    else if(param == 'sponzor'){
                        this.sponzoriArr = slike.data.q
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            layoutShift() {
                if(window.screen.width >= 1600) {
                    document.querySelectorAll(".trka").forEach( trka => {
                        trka.style.minHeight = "355px"
                        trka.style.maxHeight = "356px"
                    })
                }
                else if (window.screen.width > 450 && window.screen.width < 851) {
                    document.querySelectorAll(".trka").forEach( trka => {
                        trka.style.minHeight = "305px"
                        trka.style.maxHeight = "306px"
                    })
                }
                else if (window.screen.width <= 450) {
                    document.querySelectorAll(".trka").forEach( trka => {
                        trka.style.minHeight = "355px"
                        trka.style.maxHeight = "356px"
                    })
                }
                // else if (window.screen.width > 600 && window.screen.width <= 1000) {
                //     document.querySelectorAll(".trka").style.minHeight = "60px"
                // }
                // else if (window.screen.width <= 600) {
                //     document.querySelectorAll(".trka").style.minHeight = "51px"
                // }
            },
        },
        async beforeMount() {
            await this.fetchText()
            // await this.fetchPicures()
            await this.fetchTrkePicures('sponzor')
        },
        async mounted() {
        // this.layoutShift()
        this.fetchPictures().then(() => {
        this.hero.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = img.files_imageURL;
            link.as = 'image';
            link.fetchPriority = 'high'
            document.head.appendChild(link);
        });
    });
    console.log(this.hero, 'hero');
        try {
        let countDownDate = new Date("Oct 28, 2023 13:00:00").getTime();
    
        let x = setInterval(function() {
    
            let now = new Date().getTime();
    
            let distance = countDownDate - now;
    
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            let countDown = document.querySelector(".countDown")
            if(countDown){
                countDown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            }
    
            if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countDown").innerHTML = "EXPIRED";
            }
        }, 1000);
        if(window.screen.width <= 600) {
            document.querySelector(".rec1").classList.add("fromTop1Small")
            document.querySelector(".rec2").classList.add("fromTop2Small")
            document.querySelector(".rec3").classList.add("fromTop3Small")
        }
        else if(window.screen.width > 600 && window.screen.width < 1600) {
            document.querySelector(".rec1").classList.add("fromTop1")
            document.querySelector(".rec2").classList.add("fromTop2")
            document.querySelector(".rec3").classList.add("fromTop3")
        }
        else if(window.screen.width >= 1600) {
            document.querySelector(".rec1").classList.add("fromTop1Big")
            document.querySelector(".rec2").classList.add("fromTop2Big")
            document.querySelector(".rec3").classList.add("fromTop3Big")
        }
        localStorage.setItem('lang', 'sr')
    } catch (error) {
        console.log(error);
    }
    },
    created() {
        library.add(faYoutube, faXmark, faArrowRightArrowLeft, faBars)
    },
    beforeDestroy() {
    this.hero.forEach(img => {
        const link = document.querySelector(`link[rel="preload"][href="${img.files_imageURL}"]`);
        if (link) {
            document.head.removeChild(link);
        }
    });
}
}

</script>

<template>
<main>
    <!-- <a href="https://www.instagram.com/p/CyBYDqls2iU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" aria-label="Link do Instagram objave o startnom paketu za trke" class="novosti" target="_blank">Novosti!</a> -->
    <div class="appWrapper">
    <header>
        <nav>
        <div class="nav">
            <img class="logo" src="../assets/logo.png"  alt="Ulicna trka Ecka logo">
            <ul class="navLista">
                <li class="navLink"><a aria-label="Pregled trka" href="#trke">{{ this.shortText.dogadjajinaslov }}</a></li>
                <li class="navLink" @click="this.$router.push('/rezultati')">{{ this.shortText.rezultatinaslov }}</li>
                <li class="navLink" @click="this.$router.push('/kontakt')">{{ this.shortText.kontaktnaslov }}</li>
                <li class="navLink prijava"><span><a aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></li>
                <li class="language" @click="changeLang">
                    <img class="lang" src="../assets/srbija.webp" width="64" height="64" alt="Serbian flag image">
                    <FontAwesomeIcon class="changeLang" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                    <img class="lang" src="../assets/amerika.png" width="64" height="64" alt="USA flag image">  
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
                    <p @click="this.menu = !this.menu" class="navLink2"><a aria-label="Pregled trka" href="#trke">{{ this.shortText.dogadjajinaslov }}</a>
                    </p>
                    <p @click="this.$router.push('/rezultati'); this.menu = !this.menu" class="navLink2">{{ this.shortText.rezultatinaslov }}</p>
                    <p @click="this.menu = !this.menu; this.$router.push('/kontakt')" class="navLink2">{{ this.shortText.kontaktnaslov }}</p>
                    <p @click="this.menu = !this.menu" class="navLink2 prijava2"><span><a aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.prijavaNaslov }}</a></span></p>
                    <div class="lang2" @click="changeLang(); this.menu = !this.menu">
                        <img class="langImg" src="../assets/srbija.webp" width="64" height="64" alt="Serbian flag image">
                        <FontAwesomeIcon class="langSw" icon="fa-solid fa-arrow-right-arrow-left"></FontAwesomeIcon>
                        <img class="langImg" src="../assets/amerika.png" width="64" height="64" alt="USA flag image">
                    </div>
                </div>
            </div>
        </div>
        </nav>
    </header>
    <div class="heroWrapper">
        <section aria-label="Sekcija: Landing page">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner">
                    <div v-for="(img, index) in hero" :key="index" class="carousel-item"
                        :class="{ 'active': index === 0 }" data-bs-interval="5000">
                        <img :src="img.files_imageURL" class="d-block w-100 carouselImg" alt="Ulicna trka Ecka hero slike" preload="auto">
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
            <h1 class="heroText"><span class="rec1">{{ this.shortText.animeprva }}</span> <span class="rec2">{{ this.shortText.animedruga }}</span> <span class="rec3">{{ this.shortText.animetreca }}</span></h1>
            <div class="datumTrke">{{ this.shortText.datumtrke }}</div>
        </section>
    </div>
    <section aria-label="Sekcija: Odbrojavanje do trke">
        <div class="odbrojavanjeWrapper">
            <h2 class="countdownHeader">{{ this.shortText.vreme }}</h2>
            <p class="countDown" aria-live="polite" aria-atomic="true"></p>
            <a class="countdownBtn" aria-label="Prijavi se za trku (otvara se u novom prozoru)" href="https://trka.rs/events/409/?fbclid=IwAR0439TWd9ax2e5pLN7DJeBJS80zWFwAlzpKAo5NQTtDY-xnm_ik68OPmWk" target="_blank">{{ this.shortText.trk }}</a>
        </div>
    </section>
    <section aria-label="Sekcija: Dosadasnje trke">
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
    </section>
    <section>
        <div class="partneriTrke">
            <img class="decathlonImg" src="../assets/decathlon.jpg" alt="Decathlon - slike">
            <div class="decathlonText">
            <h3 class="decathlonHeading">{{ this.shortText.decathlonheading }} <span>{{ this.shortText.decathlonspan }}</span></h3>
            <p class="decathlonParagraf">{{ this.shortText.decp1 }}</p>
            <p class="decathlonParagraf">{{ this.shortText.decp2 }}</p>
            <p class="decathlonParagraf">{{ this.shortText.decp3 }}</p>
            <p class="decathlonParagraf">{{ this.longText.decp4 }}</p>
            </div>
        </div>
    </section>
    <section>
        <div class="editTrkeWrapper">
            <h2 class="editTrkeHeader">{{ this.shortText.editTrkeHeader }}</h2>
            <video class="editTrke" controls aria-label="Video montaza 2. Ulicne trke Ecka">
                <source src="../assets/editTrke.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </section>
    <section>
        <h2 class="sponzoriHeader">{{ this.shortText.sponzoriHeader }}</h2>
        <div class="sponzoriWrapper">
            <div class="sponzor" v-for="(sponzor, index) in sponzoriArr" :key="index">
                <img class="sponzorImg" :src="sponzor.files_imageURL" width="380" height="380" alt="Sponzor slika">
            </div>
        </div>
    </section>
    <Transition @enter="enterAnimation" @leave="leaveAnimation">
    <div class="prvaTrkaWrapper" v-if="this.prvaTrka">
        <div class="prvaTrkaPopup">
            <section class="carouselPopup" aria-label="Sekcija: Carousel slika 1. Ulicne trke Ecka">
                <div id="carouselExampleCaptions2" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                    <div class="carousel-inner">
                        <div v-for="(img, index) in popupImg" :key="index" class="carousel-item"
                            :class="{ 'active': index === 0 }" data-bs-interval="5000">
                            <img :src="img.files_imageURL" class="d-block w-100" alt="Prva ulicna trka Ecka slike">
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
            </section>
            <section class="prvaTrkaText">
                <h2 class="prvaTrkaHeading">{{ this.shortText.prvaTrkaHeading }}</h2>
                <p class="datumTrkePopup">{{ this.shortText.trka1popdate }}</p>
                <p class="prvaTrkaParagraf">{{ this.shortText.trka1popfinish }}</p>
                <p class="prvaTrkaParagraf">{{ this.longText.trka1popopis }}</p>
                <p class="prvaTrkaParagraf trkaLink" @click="this.$router.push('/rezultati')">{{ this.shortText.trka1poprez }}</p>
                <div class="ytWrapper"><a aria-label="Pogledajte video prve trke na YouTube-u" href="https://youtu.be/P6kK6lt81E4?si=GEsAHkMsHU5yfD_m" class="prvaTrkaParagraf" target="_blank">{{ this.shortText.trka1poppogledaj }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
            </section>
            <FontAwesomeIcon @click="this.prvaTrka = !this.prvaTrka" class="xmark" icon="fa-solid fa-xmark"></FontAwesomeIcon>
        </div>
    </div>
    </Transition>
    <Transition @enter="enterAnimation" @leave="leaveAnimation">
    <div class="drugaTrkaWrapper" v-if="this.drugaTrka">
        <div class="drugaTrkaPopup">
            <section class="carouselPopup" aria-label="Sekcija: Carousel slika 2. Ulicne trke Ecka">
                <div id="carouselExampleCaptions3" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                    <div class="carousel-inner">
                        <div v-for="(img, index) in popupImg" :key="index" class="carousel-item"
                            :class="{ 'active': index === 0 }" data-bs-interval="5000">
                            <img :src="img.files_imageURL" class="d-block w-100" alt="Druga ulicna trka Ecka slike">
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
            </section>
            <section class="drugaTrkaText">
                <h2 class="drugaTrkaHeading">{{ this.shortText.drugaTrkaHeading }}</h2>
                <p class="datumTrkePopup">{{ this.shortText.trka2popdate }}</p>
                <p class="drugaTrkaParagraf">{{ this.shortText.trka2popfinish }}</p>
                <p class="drugaTrkaParagraf">{{ this.shortText.trka2popopis }}</p>
                <p class="drugaTrkaParagraf trkaLink" @click="this.$router.push('/rezultati')">{{ this.shortText.trka2poprez }}</p>
                <div class="ytWrapper"><a aria-label="Pogledajte video druge trke na YouTube-u" href="https://youtu.be/blSz_Dvg7Ro?si=U4Xlgl20OfWBG45C" class="drugaTrkaParagraf" target="_blank">{{ this.shortText.trka2poppogledaj }}</a><FontAwesomeIcon class="yt" icon="fa-brands fa-youtube"></FontAwesomeIcon></div>
            </section>
            <FontAwesomeIcon @click="this.drugaTrka = !this.drugaTrka" class="xmark" icon="fa-solid fa-xmark"></FontAwesomeIcon>
        </div>
    </div>
    </Transition>
</div>
<RouterView></RouterView>
</main>
<Footer/>
</template>

<style>
*{
margin: 0;
padding: 0;
font-family: Poppins;
scroll-behavior: smooth;
}
body{
    overflow-x: hidden;
}

.novosti{
    position: fixed;
    bottom: 2em;
    right: 2em;
    border: none;
    text-decoration: none;
    background-color: rgb(241, 22, 22);
    color: #fff;
    font-weight: 700;
    font-size: 1.2em;
    padding: 15px;
    z-index: 1000;
    box-shadow: 0 0 10px #fff;
    cursor: pointer;
    animation: jump 0.5s infinite alternate;
}
@keyframes jump {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-15px);
    }
}
/* ------------------------------------------HERO SECTION--------------------------------------- */

.heroWrapper{
position: relative;
}
.carouselImg{
    width: 100%;
    height: 95vh !important;
}
.carousel-control-prev-icon, .carousel-control-next-icon{
    width: 4em !important;
    height: 4em !important;
}
#carouselExampleCaptions .carousel-control-prev, #carouselExampleCaptions .carousel-control-next {
    width: 5% !important;
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
    z-index: 500;
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
    height: auto;
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
h1{
    font-size: 1.2em !important;
}
.rec1, .rec2, .rec3{
    position: absolute;
    right: 5%;
    top: -40%;
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
        top: -40%;
        font-size: 11em;
    }
    100%{
        top: 20%;
        font-size: 7em;
    }
}
@keyframes rec2 {
    0%{
        top: -40%;
        font-size: 11em;
    }
    100%{
        top: 40%;
        font-size: 7em;
    }
}
@keyframes rec3 {
    0%{
        top: -40%;
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
        top: -30%;
        font-size: 12em;
    }
    100%{
        right: 2%;
        top: 20%;
        font-size: 8em;
    }
}
@keyframes rec2Big {
    0%{
        top: -30%;
        font-size: 12em;
    }
    100%{
        right: 2%;
        top: 40%;
        font-size: 8em;
    }
}
@keyframes rec3Big {
    0%{
        top: -30%;
        font-size: 12em;
    }
    100%{
        right: 2%;
        top: 60%;
        font-size: 8em;
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
        top: -30%;
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
        top: -30%;
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
        top: -30%;
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
    z-index: 5;
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
    text-decoration: none;
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
/* ------------------------------------------SPONZORI------------------------------------ */

.sponzoriWrapper{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto 2em;
    justify-content: space-evenly;
    align-items: center;
}
.sponzoriHeader{
    font-size: 4em;
    text-align: center;
    /* margin-top: 2em; */
}
.sponzor{
    width: 18%;
}
.sponzorImg{
    width: 100%;
    height: auto;
}


/* -----------------------------------------END OF SPONZORI------------------------------------ */
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
.trkaLink{
    cursor:pointer;
    color: #0f6fff;
    text-decoration: underline;
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

@media (max-width: 1450px) {
    h1{
        font-size: 1em !important;
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
        flex-basis: 30%;
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
        width: 80%;
        text-align: center;
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
    .sponzor{
        width: 22%;
    }
}

@media (max-width: 850px) {
    .trkeWrapper{
        flex-direction: column;
    }
    .trka{
        width: 60%;
        margin: 1em auto;
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
        height: auto;
    }
    .langSw{
        font-size: 2em;
    }
    .prijava2{
        font-weight: 700;
    }
    .editTrkeHeader, .sponzoriHeader{
        font-size: 2em;
    }
    .countdownHeader, .countDown{
        font-size: 2.5em;
    }
    .countdownBtn, .decathlonHeading{
        font-size: 1.5em;
    }
    .trka{
        width: 90%;
        margin: 2em auto;
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
        top: 25px;
        right: 25px;
        color: #000;
    }
    .sponzor{
        width: 30%;
    }
}

</style>
