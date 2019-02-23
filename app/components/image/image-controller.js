import ImageService from "./image-service.js";


const _is = new ImageService()


function drawImage() {
  let img = _is.bgImg
  document.body.style.backgroundImage = `url(${img})`
}


export default class ImageController {
  constructor() {
    _is.grabImage()
    _is.addSubscriber('imgFromApi', drawImage)
  }



}

