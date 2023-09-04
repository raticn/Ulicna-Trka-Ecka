<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default{
    data() {
        return {
            form: {
                name: '',
                email: '',
                predmet: '',
                message: '',
            },
            isNameFocused: false,
            isEmailFocused: false,
            isPredmetFocused: false,
            menu: false,
        }
    },
    components: {
        Footer,
        FontAwesomeIcon
    },
    methods: {
        onFocus(field) {
            this[field] = true;
            },
        onBlur(field, formField) {
            if (this.form[formField] === '') {
                this[field] = false;
            }
        },
        focusInput(inputRef) {
        this.$refs[inputRef].focus();
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    created() {
        library.add(faArrowRightArrowLeft, faBars)
    }
}
</script>

<template>
<div class="kontaktWrapper">
    <nav class="nav fixed">
        <img class="logo" @click="this.$router.push('/')" src="../assets/logo.png" alt="">
        <ul class="navLista">
            <li class="navLink">Događaji</li>
            <li class="navLink">Rezultati</li>
            <li class="navLink">Kontakt</li>
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
    <div class="kontakt">
        <div class="kontaktInfo">
            <div class="contactUs">
                <p class="bold">Sportsko udruženje Ulična trka Ečka</p>
                <p class="bold">Beogradska 64, Zrenjanin</p>
                <p class="bold">+381 62 543-543</p>
            </div>
            <form id="form" action="https://formsubmit.co/@gmail.com" method="POST">
                <div class="formInfo">
                    <div class="formField" :class="{ focused: isNameFocused || form.name !== '' }">
                        <p @click="focusInput('imeInput')">Ime i prezime</p>
                        <input ref="imeInput" name="Ime" type="text" v-model="form.name" required @focus="onFocus('isNameFocused')" @blur="onBlur('isNameFocused', 'name')"/>
                    </div>
                    <div class="formField" :class="{ focused: isEmailFocused || form.email !== '' }">
                        <p @click="focusInput('emailInput')">E-mail</p>
                        <input ref="emailInput" name="Email" type="email" v-model="form.email" required @focus="onFocus('isEmailFocused')" @blur="onBlur('isEmailFocused', 'email')"/>
                    </div>
                    <div class="formField" :class="{ focused: isPredmetFocused || form.predmet !== '' }">
                        <p @click="focusInput('predmetInput')">Predmet</p>
                        <input ref="predmetInput" name="Predmet" type="text" v-model="form.predmet" required @focus="onFocus('isPredmetFocused')" @blur="onBlur('isPredmetFocused', 'predmet')"/>
                    </div>
                </div>
                <div class="formMessage">
                    <div class="formField">
                        <textarea name="Poruka" id="message" v-model="form.message" cols="30" rows="10" required
                            placeholder="Poruka"></textarea>
                        <button class="formBtn" type="submit">POŠALJI</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="mapaFrame">
            <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.342349493463!2d20.431614576266234!3d45.321708871071955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ac3a93f9eb7bf%3A0x75c654c82e06604d!2z0KXQvtGC0LXQuyDQmtCw0YjRgtC10Lsg0JXRh9C60LA!5e0!3m2!1ssr!2srs!4v1693728683502!5m2!1ssr!2srs" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</div>
<Footer/>

</template>

<style>
.kontakt{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 150px auto 0;
}
.formField{
    position: relative;
    margin: 2.5em 0;
}
.formField p{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: top 0.5s ease-in-out;
    line-height: 40px;
}
.formField.focused p {
    top: -15px;
    color: #4A90E2;
}
input{
    padding-left: 10px;
    height: 40px;
    width: 100%;
    border-radius: 10px;
    border: none;
    background-color: #ededed;
    font-weight: 700;
}
input:focus{
    outline: 2px solid #4A90E2;
}
#message{
    background-color: #ededed;
    border-radius: 10px;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight: 700;
}
.formBtn{
    border: none;
    width: 100%;
    background-color: #4A90E2;
    color: #fff;
    font-weight: 700;
    font-size: 1.5em;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
}
.mapaFrame{
    flex-basis: 65%;
    margin-left: 2em;
}
.mapa{
    width: 100%;
    height: 600px;
}

@media (min-width: 1900px) and (max-width: 2999px) {
    .contactUs{
        padding-bottom: 0.5em;
    }
    .contactUs .bold{
        font-size: 1.5em;
    }
    .formField p{
        line-height: 60px;
        height: 60px;
        font-size: 1.5em;
    }
    input{
        line-height: 60px;
        height: 60px;
        font-size: 2em;
    }
    #message{
        font-size: 2em;
    }
    .mapa{
        height: 800px;
    }
}

@media (min-width: 3000px) {
    .navLink{
        font-size: 2em;
    }
    .logo{
        width: 9em;
    }
    .contactUs{
        padding-bottom: 0.5em;
    }
    .contactUs .bold{
        font-size: 2.5em;
    }
    .formField p{
        line-height: 80px;
        height: 80px;
        font-size: 2em;
    }
    .formField.focused p{
        top: -20px;
    }
    .formField{
        margin: 3em 0;
    }
    input{
        line-height: 80px;
        height: 80px;
        font-size: 2em;
    }
    #message{
        font-size: 2em;
    }
    .mapa{
        height: 1000px;
    }
    .formBtn{
        font-size: 2.5em;
        margin-top: 1em;
        padding: 0.5em 0;
    }
}

@media (max-width: 600px) {
    .kontakt{
        flex-direction: column;
        margin: 90px auto 0;
    }
    .mapaFrame{
        flex-basis: 90%;
        margin: 0;
    }
}
</style>