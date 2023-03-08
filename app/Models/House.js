import { generateId } from "../Utils/generateId.js";


export class House {
    constructor(year, name, bedrooms, bathrooms, sqft, price, description, imgUrl) {
        this.id = generateId()
        this.name = name
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.sqft = sqft
        this.imgUrl = imgUrl
        this.year = year
        this.description = description
        this.price = price
    }

    get HouseCard() {
        return `
        <div class="col-6 col-md-4 mt-3">
          <div class="card elevation-2">
            <img src="${this.imgUrl}" alt="">
            <div class="p-2">
              <h5 class="text-center border-bottom border-dark">${this.name} | ${this.bedrooms} | ${this.bathrooms} | ${this.year}</h5>
              <p>${this.description}</p>
              <p class="text-end"><i class="mdi mdi-currency-usd"></i>${this.price}</p>
            </div>
          </div>
        </div>
        `
    }

    static HouseForm() {
        return `
        <form onsubmit="app.housesController.addHouse()" class="row bg-dark rounded elevation-2 p-4">
            <h3>Find a House</h3>
            <div class="mb-2 col-4">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="mb-2 col-4">
              <label for="bedrooms">Bedrooms</label>
              <input type="text" name="bedrooms" id="bedrooms" class="form-control">
            </div>
            <div class="mb-2 col-4">
              <label for="bathrooms">Bathrooms</label>
              <input type="text" name="bathrooms" id="bathrooms" class="form-control">
            </div>
            <div class="mb-2 col-12">
              <label for="img">Image URL</label>
              <input type="url" name="img" id="img" class="form-control" required
                placeholder="Enter a URL for an image...">
            </div>
            <div class="mb-2 col-12">
              <label for="description">Description</label>
              <input type="text" name="description" id="description" class="form-control" maxlength="50">
            </div>
            <div class="mb-2 col-6">
              <label for="price">Price</label>
              <input type="number" name="price" id="price" class="form-control" required min="1">
            </div>
            <div class="text-end mt-2">
              <button class="btn" type="button">Cancel</button>
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        `
    }
}