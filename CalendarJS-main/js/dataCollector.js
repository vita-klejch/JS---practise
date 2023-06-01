'use strict'

class DataCollector {
    constructor() {
        this.titleOfEvent = document.getElementById("titleOfEvent");
        this.dateOfEvent = document.getElementById("dateOfEvent");
        this.timeOfEvent = document.getElementById("timeOfEvent");
        this.categoryOfEvent = document.getElementById("categoryOfEvent");
        this.descriptionOfEvent = document.getElementById("descriptionOfEvent");


        const savedEvents = localStorage.getItem("events");
        this.events = savedEvents ? JSON.parse(savedEvents) : [];


    }

    validateAndCollect() {

        try {
            if ((this.titleOfEvent.value === "") || (this.dateOfEvent.value === "") || (this.timeOfEvent.value === ""))
                throw new Error("Please make sure the fields Title, Date and Time of event are filled out.");

            if (this.descriptionOfEvent.value === "") {
                if (confirm("Are you sure you want to save the event without description?")) {
                    this.descriptionOfEvent.value = " ";
                    this.createNewEvent();
                }
                else alert("Please add the description");
            }
            else this.createNewEvent();

        } catch (err) {
            alert(err)
        }
    }


    generateID() {
        const d = new Date();
        let id = d.getTime();
        return id;
    }

    createNewEvent() {

        const event = new EventModel(this.generateID(), this.titleOfEvent.value, this.dateOfEvent.value, this.timeOfEvent.value, this.categoryOfEvent.value, this.descriptionOfEvent.value);
        this.events.push(event);

        this.setEvents();

        this.clearDataCollector();

    }

    setEvents() {
        localStorage.setItem("events", JSON.stringify(this.events));

    }

    clearDataCollector() {
        this.titleOfEvent.value = "";
        this.dateOfEvent.value = "";
        this.timeOfEvent.value = "";
        this.categoryOfEvent.value = "";
        this.descriptionOfEvent.value = "";
    }
}
