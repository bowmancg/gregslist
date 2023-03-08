import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

function _saveHouses() {
    saveState('houses', appState.houses)
}

class HousesService {
    findHouse(formData) {
        let house = new House(formData)
        console.log('finding house');
        appState.houses.push(house)
        appState.emit('houses')
        console.log(appState.houses);
    }
}

export const housesService = new HousesService()