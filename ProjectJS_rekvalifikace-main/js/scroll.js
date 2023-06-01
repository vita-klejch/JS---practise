'use strict'
class NavigationMenu {
    constructor() {
        this.liPojisteci = document.getElementById("pojistenci");
        this.liOAplikaci = document.getElementById("oAplikaci");
        this.liKontakt = document.getElementById("kontakt");

        this.firstPage = document.querySelector(".first");
        this.secondPage = document.querySelector(".second");
        this.thirdPage = document.querySelector(".third");
        this.header = document.querySelector("header");

    }
    scrollNaStranku() {
        this.liPojisteci.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
        this.liOAplikaci.onclick = () => {
            window.scrollTo({ top: this.secondPage.offsetTop - this.firstPage.offsetTop, behavior: "smooth" })
        }
        this.liKontakt.onclick = () => {
            window.scrollTo({ top: this.thirdPage.offsetTop - this.firstPage.offsetTop, behavior: "smooth" })
        }

    }
}
const naviationMenu = new NavigationMenu();
naviationMenu.scrollNaStranku();