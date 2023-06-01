'use strict'
class ListOfInjured {
    get celeJmeno() {
        return this.jmenoVlozene.value + " " + this.prijmeniVlozene.value;
    }

    constructor() {
        //definice pojistemci
        const ulozenePojistenci = localStorage.getItem("pojistenci");
        this.pojistenci = ulozenePojistenci ? JSON.parse(ulozenePojistenci) : [];   //Overime ze nejake pojistenci uz jsou ulozeny

        //vytvoreni inputu pro jmeno, prijmeni, telefon a vek
        this.jmenoVlozene = document.createElement("input");
        this.prijmeniVlozene = document.createElement("input");
        this.telefonVlozeny = document.createElement("input");
        this.vekVlozeny = document.createElement("input");

        //getter pro vytvoreni Jmena a prijmeni


        //vytvoreni div pro formular + definice pocatecni polohy formulare a seznamu na strance
        const clanekFormular = document.getElementById("clanekFormular");
        this.formular = document.createElement("div");
        clanekFormular.appendChild(this.formular);
        this.formular.setAttribute("id", "formular");
        this.polohaFormulare = -50;
        this.vyskaFormulare = - this.polohaFormulare / 2;
        this.formular.style.marginLeft = this.polohaFormulare + "rem";
        this.formular.style.height = this.vyskaFormulare + "rem";

        //Tlacitko pro otevreni formulare
        this.tlacitkoOtevritFormular = document.getElementById("otevritFormular");


        //vlozeni jednotlivych inputu (jmeno, prijmeni, tel, vek)
        const jmenoDiv = document.createElement("div");
        jmenoDiv.innerText = "Jméno";
        this.formular.appendChild(jmenoDiv);
        jmenoDiv.appendChild(this.jmenoVlozene);
        this.jmenoVlozene.setAttribute("type", "text");
        this.jmenoVlozene.setAttribute("placeholder", "např. Jan");


        const prijmeniDiv = document.createElement("div");
        prijmeniDiv.innerText = "Příjmení";
        this.formular.appendChild(prijmeniDiv);
        prijmeniDiv.appendChild(this.prijmeniVlozene);
        this.prijmeniVlozene.setAttribute("type", "text");
        this.prijmeniVlozene.setAttribute("placeholder", "např. Novák");


        const telefonDiv = document.createElement("div");
        telefonDiv.innerText = "Telefon";
        this.formular.appendChild(telefonDiv);
        telefonDiv.appendChild(this.telefonVlozeny);
        this.telefonVlozeny.setAttribute("type", "tel")
        this.telefonVlozeny.setAttribute("placeholder", "(+420) XXXYYYZZZ");

        const vekDiv = document.createElement("div");
        vekDiv.innerText = "Věk";
        this.formular.appendChild(vekDiv);
        vekDiv.appendChild(this.vekVlozeny);
        this.vekVlozeny.setAttribute("type", "number");
        this.vekVlozeny.setAttribute("placeholder", "např. 20");

        //pridani tlacitka pro uloeni pojistence
        this.tlacitkoUlozit = document.createElement("button");
        this.formular.appendChild(this.tlacitkoUlozit);
        this.tlacitkoUlozit.innerText = "Uložit pojištěnce";
        this.tlacitkoUlozit.setAttribute("id", "tlacitkoUlozit");

        //definice seznamu pojistencu       
        this.clanekSeznam = document.getElementById("seznam");
        this.clanekSeznam.style.marginTop = - this.vyskaFormulare + "rem";

        this.tabulkaSeznam = document.getElementById("tabulkaSeznam");
        this.tabulkaBodySeznam = document.createElement("tbody");
        this.tabulkaBodySeznam.setAttribute("id", "tabulkaBodySeznam");
        this.tabulkaSeznam.appendChild(this.tabulkaBodySeznam);



    }

    otevritSkrytFormular() {    //Metoda pro otevreni / skryti formulare + posun dolu seznamu pojistencu

        this.tlacitkoOtevritFormular.addEventListener("click", () => {
            if (this.tlacitkoOtevritFormular.innerText == "Nový pojištěnec") {
                this.tlacitkoOtevritFormular.innerText = "Skryt formulář";
            }
            else {
                this.tlacitkoOtevritFormular.innerText = "Nový pojištěnec";
                this.vymazatFormular();
            }
            setInterval(() => {     //posun objektu formular a sezam pojistencu
                if (this.polohaFormulare < 0 && this.tlacitkoOtevritFormular.innerText == "Skryt formulář") {
                    this.polohaFormulare++;
                }
                else if (this.polohaFormulare > -50 && this.tlacitkoOtevritFormular.innerText == "Nový pojištěnec") {
                    this.polohaFormulare--;
                }
                this.vyskaFormulare = - this.polohaFormulare / 2;
                this.formular.style.marginLeft = this.polohaFormulare + "rem";
                this.clanekSeznam.style.marginTop = - this.vyskaFormulare + "rem";
            }, 25);
        })
    }
    //Smazat nevyplneny formular
    vymazatFormular() {
        this.jmenoVlozene.value = "";
        this.prijmeniVlozene.value = "";
        this.telefonVlozeny.value = "";
        this.vekVlozeny.value = "";
    }

    //Přidat pojištěnce (vytvoreni instance, ulozeni a vypis)
    zapisParametruPojistence() {
        this.tlacitkoUlozit.addEventListener("click", () => {
            if (this.jmenoVlozene.value !== "" && this.prijmeniVlozene.value !== "" && this.telefonVlozeny.value !== "" && this.vekVlozeny.value !== "" && isNaN(this.jmenoVlozene.value) && isNaN(this.prijmeniVlozene.value) && isNaN(this.telefonVlozeny.value) !== true) {
                const pojistenec = new Pojistenec(this.celeJmeno, this.telefonVlozeny.value, this.vekVlozeny.value);
                this.pojistenci.push(pojistenec);
                this.ulozPojistence();
                this.vypisPojstencu();

                this.vymazatFormular();
            }
            else
                alert("Zadejte jméno, přijmení, telefon a věk ve správném formátu");
        });

    }


    vypisPojstencu() {
        this.tabulkaBodySeznam.innerHTML = '';
        for (const [index, pojistenec] of this.pojistenci.entries()) {
            const tr = document.createElement("tr");
            const tdCeleJmeno = document.createElement("td");
            tr.appendChild(tdCeleJmeno);
            tdCeleJmeno.innerText = pojistenec.celeJmeno;

            const tdTelefon = document.createElement("td");
            tr.appendChild(tdTelefon);
            tdTelefon.innerText = pojistenec.telefon;

            const tdVek = document.createElement("td");
            tr.appendChild(tdVek);
            tdVek.innerText = pojistenec.vek;

            const tdSmazat = document.createElement("td");
            tr.appendChild(tdSmazat);
            tdSmazat.appendChild(this.smazatPojistence(index));


            this.tabulkaBodySeznam.appendChild(tr);

        }
    }
    seznamPriOtevreni() {   //Ukazuje seznam pri nacteni stranky
        if (localStorage.getItem("pojistenci"))
            window.onload = this.vypisPojstencu();
    }



    ulozPojistence() {
        localStorage.setItem("pojistenci", JSON.stringify(this.pojistenci));
    }

    smazatPojistence(index) {
        //tlacitko smazat
        const tlacitkoSmazat = document.createElement("button");
        tlacitkoSmazat.innerText = "Smazat";
        tlacitkoSmazat.setAttribute("class", "tlacitkoSmazat")


        tlacitkoSmazat.onclick = () => {
            this.pojistenci.splice(index, 1);
            this.vypisPojstencu();
            this.ulozPojistence();

        }
        return tlacitkoSmazat;
    }
}



