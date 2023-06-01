'use strict'

class ListOfEvents {
    constructor() {
        this.list = new DataCollector();
    }

    prepareDateForView(element) {
        const splitDate = element.date.split("-");
        splitDate.reverse();
        const correctDate = splitDate.join(".");

        return correctDate;

    }

    prepareDescriptionForView(element) {
        const msOfCreation = new Date(element.id);
        const timeOfCreationFull = msOfCreation.toLocaleString("en-GB").replaceAll("/", ".").replaceAll(",", " at");
        const timeOfCreation = timeOfCreationFull.slice(0, -3);

        const descriptionToChange = element.description;

        const correctDescripion2 = `The event was created ${timeOfCreation} <br>`;

        const correctDescripion = correctDescripion2.concat(descriptionToChange);

        return correctDescripion;

    }


    sortByDateOfCreation(sign) {
        this.list.events.sort((a, b) => {
            if (a.id < b.id) return -sign;
            if (a.id > b.id) return sign;
            return 0;
        })
        this.list.clearDataCollector()
        return this.list.events;
    }

    sortByCategory(sign) {
        this.list.events.sort((a, b) => {
            a = parseInt(a.category);
            b = parseInt(b.category)

            if (a < b) return -sign;
            if (a > b) return sign;
            return 0
        })
        this.list.clearDataCollector()
        return this.list.events;
    }


    sortByDateOfEvent(sign) {
        this.list.events.sort((a, b) => {

            a = parseInt(a.date.replaceAll("-", "") + a.time.replaceAll(":", ""));
            b = parseInt(b.date.replaceAll("-", "") + b.time.replaceAll(":", ""));

            if (a < b) return -sign;
            if (a > b) return sign;
            return 0
        })
        this.list.clearDataCollector();
        return this.list.events;
    }

    prepareTimeToCompare() {
        let d = new Date();
        //sekundy - sekundy do 1970 + posle

        let yearToSeconds = d.getFullYear() * 365 * 24 * 60 * 60;
        let monthToSecnds = (d.getMonth() + 1)

        let month = "";
        if ((d.getMonth() + 1) < 10) {
            month = "0" + (d.getMonth() + 1).toString();
        }
        else { month = (d.getMonth() + 1).toString() };

        let day = "";
        if (d.getDate() < 10) {
            day = "0" + d.getDate().toString();
        }
        else { day = d.getDate().toString() };

        let hours = "";
        if (d.getHours() < 10) {
            hours = "0" + d.getHours().toString();
        }
        else { hours = d.getHours().toString() };

        let minutes = "";
        if (d.getMinutes() < 10) {
            minutes = "0" + d.getMinutes().toString();
        }
        else { minutes = d.getMinutes().toString() };


        const currentTime = parseInt(year + month + day + hours + minutes);
        return currentTime;
    }

    calculateTimeRemained(date, time) {
        const yearMonthDay = date.split(".").reverse();
        const hoursMinutes = time.split(":");
        const year = parseInt(yearMonthDay[0]);
        const month = parseInt(yearMonthDay[1]);
        const day = parseInt(yearMonthDay[2]);
        const hours = parseInt(hoursMinutes[0]);
        const minutes = parseInt(hoursMinutes[1]);

        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let daysMonthToEvent = 0;
        for (let i = 0; i < month; i++) {
            daysMonthToEvent += monthDays[i];
        }
        const secondsToEventFromYear = (daysMonthToEvent + day - 1) * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60;

        let dToCurrentYear = new Date(2023, 0);
        let currentTime = new Date();

        let currentYear = currentTime.getFullYear();
        let resultedTimeRemained = "";





        let currentSeconds = (currentTime.getTime() - dToCurrentYear.getTime()) / 1000;

        let secondsToEvent = secondsToEventFromYear - currentSeconds;


        if (secondsToEventFromYear >= currentSeconds) {
            if (currentYear === year) {
                let daysRemained = Math.floor(secondsToEvent / (60 * 60 * 24));
                secondsToEvent -= daysRemained * (60 * 60 * 24);
                let hoursRemained = Math.floor(secondsToEvent / (60 * 60));
                secondsToEvent -= hoursRemained * (60 * 60);
                let minutesRemained = Math.floor(secondsToEvent / 60);
                secondsToEvent -= minutesRemained * 60;
                secondsToEvent = parseInt(secondsToEvent);

                if (daysRemained > 0) {
                    resultedTimeRemained = ` ${daysRemained} days, ${hoursRemained} hours, ${minutesRemained} minutes, and ${secondsToEvent} seconds`
                } else {
                    if (hoursRemained > 0) {
                        resultedTimeRemained = `${hoursRemained} hours, ${minutesRemained} minutes, and ${secondsToEvent} seconds`
                    } else {
                        if (minutesRemained > 0) {
                            resultedTimeRemained = `${minutesRemained} minutes, and ${secondsToEvent} seconds`
                        }
                        else {
                            if (secondsToEvent > 0) { resultedTimeRemained = `only ${secondsToEvent} seconds` }

                        }
                    }
                }
            }
            else resultedTimeRemained = `Your event is scheduled for ${date}`;
        }
        else resultedTimeRemained = `Your event happened ${date} at ${time}`;

        resultedTimeRemained.toString();

        resultedTimeRemained = resultedTimeRemained.replaceAll(" 1 days,", " 1 day,");
        resultedTimeRemained = resultedTimeRemained.replaceAll(" 1 hours,", " 1 hour,");
        resultedTimeRemained = resultedTimeRemained.replaceAll(" 1 minutes,", " 1 minute,");

        resultedTimeRemained = resultedTimeRemained.replaceAll(" 0 days,", "");
        resultedTimeRemained = resultedTimeRemained.replaceAll(" 0 hours,", "");
        resultedTimeRemained = resultedTimeRemained.replaceAll(" 0 minutes,", "");


        return resultedTimeRemained;
    }


    completeEvent(id) {
        this.list.events.forEach((value, index) => {
            const completed = " => Event completed or expired";
            if (value.id === id && !value.description.includes(completed))
                this.list.events[index].description += completed;

        });
        this.list.setEvents();
    }

    returnCompleteEvent(id) {
        this.list.events.forEach((value, index) => {
            const completed = "=> Event completed or expired";
            if (value.id === id && value.description.includes(completed)) {
                const event = this.list.events[index].description.replaceAll(completed, "");
                this.list.events[index].description = event;
            }


        });
        this.list.setEvents();

    }




    deleteEvent(id) {

        this.list.events.forEach((value, index) => {
            if (value.id === id)
                this.list.events.splice(index, 1);

        });
        this.list.setEvents();
    }

    editEvent(id) {
        this.list.events.forEach((value, index) => {
            if (value.id === id) {
                const editObject = this.list.events[index];

                this.list.titleOfEvent.value = editObject.title;
                this.list.dateOfEvent.value = editObject.date;
                this.list.timeOfEvent.value = editObject.time;
                this.list.categoryOfEvent.value = editObject.category;
                this.list.descriptionOfEvent.value = editObject.description;


            }
        })

    }



}
