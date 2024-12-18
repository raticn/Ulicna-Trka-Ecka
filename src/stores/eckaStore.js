import { defineStore } from 'pinia'
import axios from 'axios'

export const useEckaStore = defineStore('ecka', {
    state: () => {
    return{
        lang: "",
        text: [],
        longText: [],
        shortText: [],
    }
    },
    actions: {
        async fetchText() {
            if(localStorage.getItem('lang') == '' || localStorage.getItem('lang') == null) {
                localStorage.setItem('lang', 'sr')
            }
            this.lang = localStorage.getItem('lang');
            try {
                let res = await axios.get('https://093g123.mars2.mars-hosting.com/API/text', {
                    params: {
                        language: this.lang
                    }
                })
                this.text = res.data.trazeniTekst
                for (let item of this.text) {
                    this.shortText[item.tex_name] = item.tex_text
                    this.longText[item.tex_name] = item.tex_long
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
})
