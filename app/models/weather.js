export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.farenheight = ((this.kelvin - 273.15) * 1.8000 + 32.00).toFixed(0)
  }

  grabTemplate() {
    return `
    <h3>${this.farenheight}°</h3>
    <p>${this.city}</p>
    `
  }
}