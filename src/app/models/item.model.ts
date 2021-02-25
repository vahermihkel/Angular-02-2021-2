// export on selleks, et saaks seda hiljem importida
export class Item {
    constructor(
        public imgSrc: string,
        public title: string,
        public price: number,
        public category: string
    ) {}

    // pangakonto: saab võtta ja lisada, aga mitte otse väärtust panna (get ja set funktsiooni kaudu)
    // private on selleks, et keegi väljaspool funktsiooni seda üle ei kirjutaks suvalise 

    // getImgSrc() {
    //     return this.imgSrc;
    // }

    // setImg() {

    // }
}

// paremal pool rohelisena on tüüp

// public - klassi kaudu saab otse kätte
// private - seda muutujat saab ainult funktsiooni kaudu kätte