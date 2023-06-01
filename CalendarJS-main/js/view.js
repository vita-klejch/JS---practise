'use strict'
class ViewPage {
    constructor() {

        this.listOfEvents = new ListOfEvents();
        this.langage = new LanguageOfWeb();

        this.createNewEventButton = document.getElementById("createEvent");
        this.collapseForm = document.getElementById("collapseForm");

        this.saveEventButton = document.getElementById("saveEventButton");

        this.sortByImportanceLHButton = document.getElementById("sortByImportanceLH");
        this.sortByImportanceHLButton = document.getElementById("sortByImportanceHL");
        this.sortByDateOfCreationONButton = document.getElementById("sortByDateOfCreationON");
        this.sortByDateOfCreationNOButton = document.getElementById("sortByDateOfCreationNO");
        this.sortByDateOfEventONButton = document.getElementById("sortByDateOfEventON");
        this.sortByDateOfEventNOButton = document.getElementById("sortByDateOfEventNO");

        this.langEng = document.getElementById("EngButton");
        this.langCz = document.getElementById("CzButton");
        this.langRus = document.getElementById("RusButton");


        this.divListOfevents = document.getElementById("divListOfevents");
    }

    createDivOfEvent(id, title, date, time, category, description) {


        const divColEvent = document.createElement("div");
        this.divListOfevents.appendChild(divColEvent);
        divColEvent.setAttribute("class", "individualEvent col-sm-6 col-md-4 col-lg-3");

        const divContainer = document.createElement("div");
        divColEvent.appendChild(divContainer);
        divContainer.setAttribute("class", ` container-fluid m-1 rounded text-white ${category} `);


        const divGeneral = document.createElement("div");
        divContainer.appendChild(divGeneral);
        divGeneral.setAttribute("class", ` row `);

        const divTitle = document.createElement("div");
        divGeneral.appendChild(divTitle);
        divTitle.setAttribute("class", "mt-2 col-6 text-center h6");
        divTitle.innerText = title;

        const divDateAnTime = document.createElement("div");
        divGeneral.appendChild(divDateAnTime);
        divDateAnTime.setAttribute("class", "mt-2 col-6 text-center h6");
        divDateAnTime.innerText = `${date} at ${time}`;

        this.showremainingTime(divGeneral, date, time);

        const divForHideButton = document.createElement("div");
        divGeneral.appendChild(divForHideButton);
        divForHideButton.setAttribute("class", "mt-2 mb-2 col-12 ");

        const hideButton = document.createElement("button");
        divForHideButton.appendChild(hideButton);
        hideButton.setAttribute("class", "btn btn-light col-12 rounded-pill");
        hideButton.setAttribute("style", "font-weight: bold; color: #5055da");
        hideButton.setAttribute("type", "button");
        hideButton.setAttribute("data-bs-toggle", "collapse");
        hideButton.setAttribute("data-bs-target", `${"#collapse" + id}`);
        hideButton.setAttribute("aria-expanded", "false");
        hideButton.setAttribute("aria-controls", "collapseExample");
        hideButton.innerText = "Show more details";
        hideButton.addEventListener("click", () => {
            if (hideButton.innerText == "Show more details") {
                hideButton.innerText = "Show less details"
            }
            else hideButton.innerText = "Show more details"
        })


        const divHidden = document.createElement("div");
        divContainer.appendChild(divHidden);
        divHidden.setAttribute("class", ` collapse row`);
        divHidden.setAttribute("id", `${"collapse" + id}`);


        const divDescription = document.createElement("div");
        divHidden.appendChild(divDescription);
        divDescription.setAttribute("class", "col-12");
        divDescription.innerHTML = description;



        const divBtnGroup = document.createElement("div");
        divHidden.appendChild(divBtnGroup);
        divBtnGroup.setAttribute("class", "container-fluid mt-2 mb-2");

        const divBtnGroupRow = document.createElement("div");
        divBtnGroup.appendChild(divBtnGroupRow);
        divBtnGroupRow.setAttribute("class", "row");


        const radioButtonGroup = document.createElement("div");
        divBtnGroupRow.appendChild(radioButtonGroup);
        radioButtonGroup.setAttribute("class", "col-6 btn-group-vertical");

        const completeEventButton = document.createElement("button");
        radioButtonGroup.appendChild(completeEventButton);

        completeEventButton.setAttribute("class", "btn btn-primary text-start");
        completeEventButton.innerText = "complete";

        completeEventButton.addEventListener("click", () => {

            completeEventButton.setAttribute("class", "btn btn-secondary text-start");
            uncompleteEventButton.setAttribute("class", "btn btn-primary text-end");
            buttonEdit.setAttribute("class", "btn btn-secondary");
            buttonDelete.setAttribute("class", "btn btn-secondary");

            this.listOfEvents.completeEvent(id);
            this.writeOutListofEvents();
        })


        const uncompleteEventButton = document.createElement("button");
        radioButtonGroup.appendChild(uncompleteEventButton);

        uncompleteEventButton.setAttribute("class", "btn btn-secondary text-end");
        uncompleteEventButton.innerText = "return";

        uncompleteEventButton.addEventListener("click", () => {

            completeEventButton.setAttribute("class", "btn btn-primary text-start");
            uncompleteEventButton.setAttribute("class", "btn btn-secondary text-end");

            buttonEdit.setAttribute("class", "btn btn-warning");
            buttonDelete.setAttribute("class", "btn btn-danger");

            this.listOfEvents.returnCompleteEvent(id);
            this.writeOutListofEvents();
        })


        const divBtnGroupVerical = document.createElement("div");
        divBtnGroupRow.appendChild(divBtnGroupVerical);
        divBtnGroupVerical.setAttribute("class", "col-6 btn-group-vertical");

        const buttonEdit = document.createElement("button");
        divBtnGroupVerical.appendChild(buttonEdit);
        buttonEdit.setAttribute("class", "btn btn-warning");
        buttonEdit.setAttribute("id", `${id + "edit"}`);
        buttonEdit.innerText = "Edit event";
        this.collapseFormList(buttonEdit);
        buttonEdit.addEventListener("click", () => {
            const scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: '#createEvent'
            })

            this.listOfEvents.editEvent(id);
            this.listOfEvents.deleteEvent(id);
            this.writeOutListofEvents();
        })


        const buttonDelete = document.createElement("button");
        divBtnGroupVerical.appendChild(buttonDelete);
        buttonDelete.setAttribute("class", "btn btn-danger");
        buttonDelete.setAttribute("id", `${id + "del"}`);
        buttonDelete.innerText = "Delete event";
        buttonDelete.addEventListener("click", () => {
            this.listOfEvents.deleteEvent(id);
            this.writeOutListofEvents();
        })



        this.setColorCategory(category, divContainer);

        this.eventCompletedOrNot(divContainer, completeEventButton, uncompleteEventButton, description, category, buttonEdit, buttonDelete);

    }

    setColorCategory(category, element) {
        if (category == "4") {
            element.style.background = "linear-gradient(90deg, rgba(176,62,62,1) 0%, rgba(212,96,96,1) 62%, rgba(242,91,145,1) 100%)";

        }
        if (category == "3") {
            element.style.background = "linear-gradient(90deg, rgba(203,183,26,1) 0%, rgba(224,194,68,1) 47%, rgba(150,191,83,1) 100%)";

        }
        if (category == "2") {
            element.style.background = "linear-gradient(90deg, rgba(57,161,64,1) 0%, rgba(84,181,139,1) 62%, rgba(146,200,90,1) 100%)";

        }
        if (category == "1") {
            element.style.background = "linear-gradient(90deg, rgba(62,89,176,1) 0%, rgba(96,147,212,1) 62%, rgba(144,91,242,1) 100%)";

        }

    }


    eventCompletedOrNot(divContainer, completeEventButton, uncompleteEventButton, description, category, buttonEdit, buttonDelete) {
        if (description.includes("=> Event completed or expired")) {

            divContainer.setAttribute("class", ` container-fluid m-1 rounded bg-secondary text-white`);
            divContainer.style.background = "#6c757d";

            completeEventButton.setAttribute("class", "btn btn-secondary text-start");
            uncompleteEventButton.setAttribute("class", "btn btn-primary text-end");

            buttonEdit.setAttribute("class", "btn btn-secondary");
            buttonDelete.setAttribute("class", "btn btn-secondary");
        }
        else {
            divContainer.setAttribute("class", ` container-fluid m-1 rounded ${category} text-white`);
            completeEventButton.setAttribute("class", "btn btn-primary text-start");
            uncompleteEventButton.setAttribute("class", "btn btn-secondary text-end");
            buttonEdit.setAttribute("class", "btn btn-warning");
            buttonDelete.setAttribute("class", "btn btn-danger");
        }
    }



    showCurrentTime() {
        const divCreateButtonAndTime = document.getElementById("createButtonAndTime");
        const divCurrentDateAndTime = document.createElement("div");
        divCurrentDateAndTime.setAttribute("class", "col-auto d-flex  align-items-center justify-content-center")
        divCreateButtonAndTime.appendChild(divCurrentDateAndTime);

        const divCurrentDateAndTimeText = document.createElement("div");
        divCurrentDateAndTime.appendChild(divCurrentDateAndTimeText);
        divCurrentDateAndTimeText.setAttribute("class", "text-center");
        divCurrentDateAndTimeText.setAttribute("style", "font-size: 1.3rem; font-weight: bold; color: #5055da");

        const runTime = setInterval(() => {
            const instanceOfDate = new Date();
            function fixTimer(i) {
                if (i < 10) {
                    i = "0" + i
                }
                return i;
            }
            let h = fixTimer(instanceOfDate.getHours());
            let m = fixTimer(instanceOfDate.getMinutes());
            let s = fixTimer(instanceOfDate.getSeconds());

            const timer = "Date: " + instanceOfDate.getDate() + "." + (instanceOfDate.getMonth() + 1) + "." + instanceOfDate.getFullYear() + "<br> Time: " + h + ":" + m + ":" + s;
            divCurrentDateAndTimeText.innerHTML = timer;

        }, 100);
        return runTime;

    }


    showremainingTime(div, date, time) {

        const divCurrentDateAndTime = document.createElement("div");
        divCurrentDateAndTime.setAttribute("class", "mt-2 col-12 text-white text-center");
        divCurrentDateAndTime.setAttribute("style", "font-size: 0.8rem; font-weight: bold")

        div.appendChild(divCurrentDateAndTime);

        let timer = setInterval(() => {
            divCurrentDateAndTime.innerHTML = this.listOfEvents.calculateTimeRemained(date, time);
        }, 100);

        return timer;
    }


    removeAll() {
        document.querySelectorAll(".individualEvent").forEach(individualEvent => { individualEvent.remove() })
    }


    hideAll() {
        let myCollapse = this.divListOfevents;
        let bsCollapse = new bootstrap.Collapse(myCollapse, {
            toggle: false
        })

        bsCollapse.hide();
    }





    showAll() {
        let myCollapse = this.divListOfevents;
        let bsCollapse = new bootstrap.Collapse(myCollapse, {
            toggle: false
        })
        setTimeout(() => {
            bsCollapse.show();
        }, 100);

    }


    writeOutListofEvents() {
        this.hideAll();
        this.removeAll();
        for (const everyEvent of this.listOfEvents.list.events) {
            const correctDate = this.listOfEvents.prepareDateForView(everyEvent);
            const correctDescripion = this.listOfEvents.prepareDescriptionForView(everyEvent);
            //const eventCompleted
            this.createDivOfEvent(everyEvent.id, everyEvent.title, correctDate, everyEvent.time, everyEvent.category, correctDescripion);
        }
        this.showAll();
    }

    saveAndWriteOutListofEvents() {
        this.saveEventButton.addEventListener("click", () => {
            this.listOfEvents.list.validateAndCollect();
            this.writeOutListofEvents();
        })
    }


    showAllSavedEvents() {
        const arrayFromStroage = JSON.parse(localStorage.getItem("events"));

        if (arrayFromStroage.length > 0) {
            window.onload = this.listOfEvents.sortByDateOfEvent(1);
            this.writeOutListofEvents();
        }
    }



    collapseFormList(buttonToClick) {

        let myCollapse = document.getElementById('collapseForm')
        let bsCollapse = new bootstrap.Collapse(myCollapse, {
            toggle: false
        })

        buttonToClick.addEventListener("click", () => {

            bsCollapse.show();

        })

    }




    sortByDateOfCreationON() {
        this.sortByDateOfCreationONButton.addEventListener("click", () => {
            this.listOfEvents.sortByDateOfCreation(1);
            this.writeOutListofEvents();
        })
    }

    sortByDateOfCreationNO() {
        this.sortByDateOfCreationNOButton.addEventListener("click", () => {
            this.listOfEvents.sortByDateOfCreation(-1);
            this.writeOutListofEvents();
        })
    }


    sortByImportanceLH() {
        this.sortByImportanceLHButton.addEventListener("click", () => {
            this.listOfEvents.sortByCategory(1);
            this.writeOutListofEvents();

        })
    }

    sortByImportanceHL() {
        this.sortByImportanceHLButton.addEventListener("click", () => {
            this.listOfEvents.sortByCategory(-1);
            this.writeOutListofEvents();

        })
    }

    sortByDateOfEventON() {
        this.sortByDateOfEventONButton.addEventListener("click", () => {
            this.listOfEvents.sortByDateOfEvent(1);
            this.writeOutListofEvents();
        })
    }

    sortByDateOfEventNO() {
        this.sortByDateOfEventNOButton.addEventListener("click", () => {
            this.listOfEvents.sortByDateOfEvent(-1);
            this.writeOutListofEvents();
        })
    }

    changeLanguage() {
        this.langEng.addEventListener("click", () => {
            this.langage.changeLanguageEng();
        })
        this.langCz.addEventListener("click", () => {
            this.langage.changeLanguageCz();
        })
        this.langRus.addEventListener("click", () => {
            this.langage.changeLanguageRus();
        })


    }

}
