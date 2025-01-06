import {makeAutoObservable} from "mobx";
// import empty_card from "../assets/empty_card.png";

export default class DeviseStore {
    constructor() {
        this._types = []
        /*  {id: 1, name: "Холодильники"}, 
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"} */
        
        this._brands = []
        /*{id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
         */

        this._devices = []
/*          {id: 1, name: "Устройство 1", price: 250, rating: 5, img: empty_card},
            {id: 2, name: "Устройство 2", price: 350, rating: 5, img: empty_card},
            {id: 3, name: "Устройство 3", price: 450, rating: 5, img: empty_card},
            {id: 4, name: "Устройство 4", price: 450, rating: 5, img: empty_card},
            {id: 5, name: "Устройство 5", price: 450, rating: 5, img: empty_card},
            {id: 6, name: "Устройство 6", price: 450, rating: 5, img: empty_card},
            {id: 7, name: "Устройство 7", price: 450, rating: 5, img: empty_card}, */
        
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    
    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}