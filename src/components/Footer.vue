<script>
import { RouterLink, RouterView } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default {
    components: {
        FontAwesomeIcon,
    },
    created() {
        library.add(faLocationDot, faPhone, faEnvelope, faInstagram, faFacebook, faTiktok)
    }
}
</script>

<template>
    <div class="footer">
        <div class="footer_wrapper">
            <div class="footer_info">
                <p>
                    <FontAwesomeIcon class="footerIcons" icon="fa-solid fa-location-dot"></FontAwesomeIcon>Sportsko
                    udruženje Ulična trka Ečka, Beogradska 64, Zrenjanin
                </p>
                <p>
                    <FontAwesomeIcon class="footerIcons" icon="fa-solid fa-phone"></FontAwesomeIcon>+381 62 543-543
                </p>
                <p>
                    <FontAwesomeIcon class="footerIcons" icon="fa-solid fa-envelope"></FontAwesomeIcon>
                    ulicnatrkaecka@gmail.com
                </p>
            </div>
            <div class="socials">
                <p>Pratite nas na društvenim mrežama</p>
                <div class="socialsLinks">
                    <p><a aria-label="Pogledajte nasu Instagram stranicu" href="https://www.instagram.com/ulicna_trka_ecka/" target="_blank">
                            <FontAwesomeIcon class="socialIcons" icon="fa-brands fa-instagram"></FontAwesomeIcon>
                        </a></p>
                    <p><a aria-label="Pogledajte nasu Facebook stranicu" href="https://www.facebook.com/ulicnatrkaecka" target="_blank">
                            <FontAwesomeIcon class="socialIcons" icon="fa-brands fa-facebook"></FontAwesomeIcon>
                        </a></p>
                </div>
            </div>
        </div>
        <div class="copyright">
            &copy;2023  <a href="https://space-coders.com" aria-label="Link do web sajta: Space Coders">space-coders.com</a>
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: Poppins;
}

.footer {
    width: 100%;
    background: linear-gradient(to right, rgb(74, 144, 226), rgb(23, 45, 89));
}

.footer_wrapper {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.footer_info {
    font-size: 1.2em;
    color: #fff;
    width: 40%;
    margin: 2em;
    flex-basis: 33%;
    font-weight: bold;
}

.footer_info p {
    margin: 1em 0;
}

.footer_logo {
    width: 7em;
}

.footer_links {
    color: #fff;
    display: flex;
    flex-basis: 33%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
.socials{
    flex-basis: 33%;
    font-size: 1.5em;
    text-align: center;
}
.socialsLinks{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.socialIcons{
    color: #fff;
    font-size: 4em;
}

.footer_links p {
    font-weight: bold;
    font-size: 1.5em;
    margin: 1em 0;
}

.quicklinks {
    display: flex;
    flex-direction: column;
    padding: 0;
}

.copyright {
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.copyright a{
    padding-left: .5em;
}

.footerIcons {
    margin-right: 0.5em;
}

.footer a:link {
    color: #fff;
}

.footer a:visited {
    color: antiquewhite;
}

.footer a:hover,
a:active {
    color: #fff;
}

@media (max-width: 1150px) {
    .footer_wrapper {
        flex-direction: column;
        align-items: center;
    }

    .footer_info {
        width: 90%;
        margin: 2em auto;
        text-align: center;
    }

    .footer_links {
        width: 90%;
        margin: 0 auto;
    }
}

@media (max-width: 749px) {
    .quicklinks li {
        font-size: 0.8em;
    }
}

@media (max-width: 480px) {

    .footer_info,
    .footer_links p {
        font-size: 1em;
    }

    .quicklinks {
        height: 25em;
    }
    .socialIcons{
        font-size: 2em;
    }
}</style>