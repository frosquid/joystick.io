export default class Canvas{
    constructor(set){
        this.elemen = document.querySelector(set.elemen);
        this.context = this.elemen.getContext('2d');
        this.resolution = set.resolution;
        const elemenData = window.getComputedStyle(this.elemen);
        const elemenWidth = parseInt(elemenData.getPropertyValue('width'));
        const elemenHeight = parseInt(elemenData.getPropertyValue('height'));
        [this.elemen.width,this.width] = [elemenWidth * this.resolution,elemenWidth * this.resolution];
        [this.elemen.height,this.height] = [elemenHeight * this.resolution,elemenHeight * this.resolution];
        this.on()
    }
    on(){
        const elemenData = window.getComputedStyle(this.elemen);
        const elemenWidth = parseInt(elemenData.getPropertyValue('width'));
        const elemenHeight = parseInt(elemenData.getPropertyValue('height'));
        [this.elemen.width,this.width] = [elemenWidth * this.resolution,elemenWidth * this.resolution];
        [this.elemen.height,this.height] = [elemenHeight * this.resolution,elemenHeight * this.resolution];
    }
}