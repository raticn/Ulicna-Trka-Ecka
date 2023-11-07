<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark, faArrowRightArrowLeft, faBars, faCloudArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios';

export default{
    data() {
        return {
            rez: {},
            selectedGender: '',
            menu: false,
            lang: '',
            language: '',
            shortText: {},
            longText: {},
            pol: 'Muški',
            pdf: '',
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
        async sendGender() {
            try {
                if(localStorage.getItem('trka') == 3 || localStorage.getItem('trka') == 6) {
                    let trkaBr = localStorage.getItem('trka')
                    let gender = await axios.get('https://093g123.mars2.mars-hosting.com/API/rezultati', {
                        params: {
                            trka: trkaBr
                        }
                    })
                    this.rez = gender.data.res
                }
                else{
                    let trkaBr = localStorage.getItem('trka')
                    let gender = await axios.get('https://093g123.mars2.mars-hosting.com/API/rezultati', {
                        params: {
                            trka: trkaBr,
                            gender: this.pol
                        }
                    })
                    this.rez = gender.data.res
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    async mounted() {
        try {
            this.fetchText()
            this.sendGender()
            let trka = localStorage.getItem('trka')
            // let rezultati = await axios.get('https://093g123.mars2.mars-hosting.com/API/rezultati', {
            //     params: {
            //         trka: trkaBr
            //     }
            // })
            // this.rez = rezultati.data.res
            switch (trka) {
                case '1':
                    this.pdf = '../assets/2021_5km.zip'
                    break;
                case '2':
                    this.pdf = '../assets/2021_10km.zip'
                    break;
                case '3':
                    this.pdf = '../assets/2021_2x5km.zip'
                    break;
                case '4':
                    this.pdf = '../assets/2022_10km.zip'
                    break;
                case '5':
                    this.pdf = '../assets/2022_5km.zip'
                    break;
                case '6':
                    this.pdf = '../assets/2022_2x5km.zip'
                    break;
                case '7':
                    this.pdf = '../assets/2023_5km.zip'
                    break;
                case '8':
                    this.pdf = '../assets/2023_10km.zip'
                    break;
                case '9':
                    this.pdf = '../assets/2023_2x5km.zip'
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    },
    created() {
        library.add(faXmark, faArrowRightArrowLeft, faBars, faCloudArrowDown)
    }
}
</script>

<template>
<header>
    <nav>
        <div class="nav fixed">
            <img class="logo" @click="this.$router.push('/')" src="../assets/logo.png" alt="Ulicna trka Ecka logo">
            <ul class="navLista">
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
<div class="tableWrapper">
    <section class="pol" aria-label="Sekcija: Odabir pola ucesnika trke i preuzimanje fajla rezultata">
        {{ this.shortText.tablePol }}: <button class="polBtn"  @click="this.pol = 'Muški'; sendGender()">{{ this.shortText.polM }}</button> / <button class="polBtn" @click="this.pol = 'Ženski'; sendGender()">{{ this.shortText.polZ }}</button>
        <a class="pdfLink" :href="this.pdf" download>Download <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down"></FontAwesomeIcon></a>
    </section>
    <table>
        <thead>
        <tr>
            <th>Rank</th>
            <th>{{ this.shortText.tableNum }}</th>
            <th>{{ this.shortText.tableIme }}</th>
            <th>{{ this.shortText.tablePrezime }}</th>
            <th>{{ this.shortText.tableGod }}</th>
            <th>{{ this.shortText.tablePol }}</th>
            <th>{{ this.shortText.tableKlub }}</th>
            <th>{{ this.shortText.tableZemlja }}</th>
            <th>{{ this.shortText.tableGrad }}</th>
            <th>{{ this.shortText.tableBruto }}</th>
            <th>{{ this.shortText.tableNeto }}</th>
            <th>Status</th>
            <th>{{ this.shortText.tableId }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(result, index) in this.rez" :key="result.rez_id">
            <td>{{ index + 1 }}</td>
            <td>{{ result.rez_number }}</td>
            <td>{{ result.rez_first_name }}</td>
            <td>{{ result.rez_last_name }}</td>
            <td>{{ result.rez_birth_year }}</td>
            <td>{{ result.rez_gender }}</td>
            <td>{{ result.rez_club }}</td>
            <td>{{ result.rez_country }}</td>
            <td>{{ result.rez_city }}</td>
            <td>{{ result.rez_gun_time }}</td>
            <td>{{ result.rez_chip_time }}</td>
            <td>{{ result.rez_status }}</td>
            <td>{{ result.rez_race_id }}</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<style>
.tableWrapper{
    margin: 10% 0 0 0;
    width: 100%;
    overflow-x: auto;
}
table{
    margin: 1em auto;
}
.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
.pol{
    font-size: 1.5em;
    margin-left: 2em;
}
.polBtn{
    border: none;
    background-color: transparent;
    color: rgb(118, 28, 243);
    cursor: pointer;
}
.pdfLink{
    margin-left: 1em;
}

@media (max-width: 800px) {
    .pol{
        margin: 2em 1em 0 1em;
    }
}

@media (max-width: 600px) {
    .pol{
        margin: 2.5em 1em 0 1em;
    }
}
</style>