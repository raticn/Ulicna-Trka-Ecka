<script>
import Footer from '../components/Footer.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Nav from '../components/Nav.vue'
import { mapActions, mapState } from 'pinia'
import { useEckaStore } from '../stores/eckaStore'

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
            placeholder: '',
        }
    },
    components: {
        Footer,
        FontAwesomeIcon,
        Nav
    },
    methods: {
        ...mapActions(useEckaStore, ['fetchText']),
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
        },
    },
    computed: {
        ...mapState(useEckaStore, ['textObj', 'longText', 'lang', 'shortText']),
    },
    mounted() {
        window.scrollTo(0, 0);
        this.fetchText()
    },
    created() {
        library.add(faArrowRightArrowLeft, faBars, faInstagram, faFacebook)
    }
}
</script>

<template>
<div class="kontaktWrapper">
    <header>
        <Nav />
    </header>
    <div class="kontakt">
        <div class="kontaktInfo">
            <p class="bold">Sportsko udruženje Ulična trka Ečka</p>
            <p class="bold">Beogradska 64, Zrenjanin</p>
            <p class="bold">+381 62 543-543</p>
            <p><a aria-label="Pogledajte nasu Instagram stranicu" href="https://www.instagram.com/ulicna_trka_ecka/" target="_blank"><FontAwesomeIcon class="kontaktSocials instagram" icon="fa-brands fa-instagram"></FontAwesomeIcon>@ulicna_trka_ecka</a></p>
            <p><a aria-label="Pogledajte nasu Facebook stranicu" href="https://www.facebook.com/ulicnatrkaecka" target="_blank"><FontAwesomeIcon class="kontaktSocials" icon="fa-brands fa-facebook"></FontAwesomeIcon>Ulična Trka Ečka</a></p>
            <section aria-label="Sekcija: Kontakt forma">
                <form id="form" action="https://formsubmit.co/ulicnatrkaecka@gmail.com" method="POST">
                    <div class="formInfo">
                        <div class="formField" :class="{ focused: isNameFocused || form.name !== '' }">
                            <p @click="focusInput('imeInput')">{{ this.shortText.imeInput }}</p>
                            <input ref="imeInput" name="Ime" type="text" v-model="form.name" required @focus="onFocus('isNameFocused')" @blur="onBlur('isNameFocused', 'name')"/>
                        </div>
                        <div class="formField" :class="{ focused: isEmailFocused || form.email !== '' }">
                            <p @click="focusInput('emailInput')">{{ this.shortText.emailInput }}</p>
                            <input ref="emailInput" name="Email" type="email" v-model="form.email" required @focus="onFocus('isEmailFocused')" @blur="onBlur('isEmailFocused', 'email')"/>
                        </div>
                        <div class="formField" :class="{ focused: isPredmetFocused || form.predmet !== '' }">
                            <p @click="focusInput('predmetInput')">{{ this.shortText.predmetInput }}</p>
                            <input ref="predmetInput" name="Predmet" type="text" v-model="form.predmet" required @focus="onFocus('isPredmetFocused')" @blur="onBlur('isPredmetFocused', 'predmet')"/>
                        </div>
                    </div>
                    <div class="formMessage">
                        <div class="formField">
                            <textarea name="Poruka" id="message" v-model="form.message" cols="30" rows="10" required :placeholder="placeholder == 'sr' ? 'Poruka' : 'Message' "></textarea>
                            <button class="formBtn" type="submit">{{ this.shortText.posaljiBtn }}</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        <section class="mapaFrame" aria-label="Sekcija: Mapa">
                <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.342349493463!2d20.431614576266234!3d45.321708871071955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ac3a93f9eb7bf%3A0x75c654c82e06604d!2z0KXQvtGC0LXQuyDQmtCw0YjRgtC10Lsg0JXRh9C60LA!5e0!3m2!1ssr!2srs!4v1693728683502!5m2!1ssr!2srs" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
</div>
<Footer/>

</template>

<style>
.kontaktWrapper .nav{
    position: fixed;
    background-color: rgb(255, 255, 255);
    color: #4A90E2;
    border-bottom: 1px solid #4A90E2;
    z-index: 10;
}
.kontakt{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 150px auto 0;
}
.kontaktSocials{
    margin: 0 .5em;
}
.instagram{
    color: rgb(255, 0, 140);
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