import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { House } from "../Models/House.js";
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"

function _drawHouses() {
    const houses = appState.houses
    let template = ''
    houses.forEach(house => template += house.HouseCard)
    setHTML('listings', template)
}

function _drawHousesForm() {
    setHTML('form', House.HouseForm())
}

export class HousesController {
    constructor() {
        console.log('House loaded');
        _drawHouses()
        appState.on('houses', _drawHouses)
    }

    showHouses() {
        _drawHouses()
        _drawHousesForm()
    }

    findHouse() {
        event.preventDefault()
        const form = event.target
        let formData = getFormData(form)
        console.log(formData);
        housesService.findHouse(formData)
        form.reset()
    }
}