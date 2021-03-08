export default class Flight {
  constructor(el, i, obj) {
    this.id = el[`QuoteId`];
    this.carrier = obj[`Carriers`][i][`Name`];
    this.price = Number(el[`MinPrice`]).toLocaleString();
    this.date = el[`OutboundLeg`][`DepartureDate`];
    this.time = `14:50`; // Сервер возвращает полночь.
    this.isFavorite = false;
  }

  static parseFlight(el, i, obj) {
    return new Flight(el, i, obj);
  }

  static parseFlights(obj) {
    return obj[`Quotes`].map((el, i) => {
      return Flight.parseFlight(el, i, obj);
    });
  }
}
