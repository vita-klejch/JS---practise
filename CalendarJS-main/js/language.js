'use strict'
class LanguageOfWeb {
    constructor() {

        this.elMenuCalendar = document.getElementById("textCalendar");
        this.elMenuAboutApp = document.getElementById("textAboutApp");
        this.elMenuLang = document.getElementById("textLang");
        this.elCreateEvent = document.getElementById("createEvent");
        this.elAddTitle = document.getElementById("addTitle");
        this.elAddTitlePlaceHolder = document.getElementById("titleOfEvent");
        this.elAddDate = document.getElementById("addDate");
        this.elAddTime = document.getElementById("addTime");
        this.elAddCategory = document.getElementById("addCategory");
        this.elCategoryHigh = document.getElementById("categoryHigh");
        this.elCategoryMedium = document.getElementById("categoryMedium");
        this.elCategoryLow = document.getElementById("categoryLow");
        this.elCategorySpare = document.getElementById("categorySpare");

        this.elAddDescription = document.getElementById("addDescription");
        this.elAddDescriptionPlaceHolder = document.getElementById("descriptionOfEvent");

        this.elSaveEventButton = document.getElementById("saveEventButton");

    }

    changeLanguageEng() {
        this.elMenuCalendar.innerText = "Diary";
        this.elMenuAboutApp.innerText = "about App";
        this.elMenuLang.innerText = "Lang";
        this.elCreateEvent.innerText = "Create new event";

        this.elAddTitle.innerText = "Add title";
        this.elAddTitlePlaceHolder.setAttribute("placeholder", "Write the title of your event");

        this.elAddDate.innerText = "Date";
        this.elAddTime.innerText = "Time";

        this.elAddCategory.innerText = "Category";
        this.elCategoryHigh.innerText = "High importance";
        this.elCategoryMedium.innerText = "Medium importance";
        this.elCategoryLow.innerText = "Low importance";
        this.elCategorySpare.innerText = "Spare time";

        this.elAddDescription.innerText = "Description";
        this.elAddDescriptionPlaceHolder.setAttribute("placeholder", "Write the description of your event");

        this.elSaveEventButton.innerText = "Save";


    }

    changeLanguageCz() {
        this.elMenuCalendar.innerText = "Diář";
        this.elMenuAboutApp.innerText = "O aplikaci";
        this.elMenuLang.innerText = "Jazyk";
        this.elCreateEvent.innerText = "Vytvořit novou událost";

        this.elAddTitle.innerText = "Přidat název";
        this.elAddTitlePlaceHolder.setAttribute("placeholder", "Zadejte název události")

        this.elAddDate.innerText = "Datum";
        this.elAddTime.innerText = "Čas";
        this.elAddCategory.innerText = "Kategorie";
        this.elCategoryHigh.innerText = "Velmi důležité";
        this.elCategoryMedium.innerText = "Středně důležité";
        this.elCategoryLow.innerText = "Málo důležité";
        this.elCategorySpare.innerText = "Volný čas";

        this.elAddDescription.innerText = "Popis";
        this.elAddDescriptionPlaceHolder.setAttribute("placeholder", "Zadejte popis události");

        this.elSaveEventButton.innerText = "Uložit";

    }

    changeLanguageRus() {
        this.elMenuCalendar.innerText = "Ежедневник";
        this.elMenuAboutApp.innerText = "О приложении";
        this.elMenuLang.innerText = "Язык";
        this.elCreateEvent.innerText = "Напланировать событие";

        this.elAddTitle.innerText = "Добавить название";
        this.elAddTitlePlaceHolder.setAttribute("placeholder", "Задайте название вашего события")

        this.elAddDate.innerText = "Дата";
        this.elAddTime.innerText = "Время";
        this.elAddCategory.innerText = "Категория";
        this.elCategoryHigh.innerText = "Высокая важность";
        this.elCategoryMedium.innerText = "Средняя важность";
        this.elCategoryLow.innerText = "Низкая важность";
        this.elCategorySpare.innerText = "Свободное время";

        this.elAddDescription.innerText = "Описание";
        this.elAddDescriptionPlaceHolder.setAttribute("placeholder", "Добавьте описание вашего события");

        this.elSaveEventButton.innerText = "Сохранить";
    }

}
