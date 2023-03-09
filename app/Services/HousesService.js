import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

function _saveHouses() {
    saveState('houses', appState.houses)
}

class HousesService {
    findHouse(formData) {
        let house = new House(formData.year, formData.name, formData.bedrooms, formData.bathrooms, formData.sqft, formData.price, formData.description, formData.imgUrl)
        console.log('finding house');
        appState.houses.push(house)
        appState.emit('houses')
        console.log(appState.houses);
        _saveHouses()
    }
}

export const housesService = new HousesService()