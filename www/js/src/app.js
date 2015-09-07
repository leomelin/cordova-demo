class App {
  constructor (options) {
    console.log('Starting the app');

    let pictureBtn = document.getElementById('choose-a-picture-btn');

    pictureBtn.onclick = this.pictureChooseBtnClicked;
  }

  pictureChooseBtnClicked (e) {
    console.log('button clicked', e);

    navigator.camera.getPicture(function success (imageData) {
      console.log('Camera success', imageData);

      let image = document.getElementById('image');

      image.src = `data:image/png;base64,${imageData}`;

    }, function error (err) {
      console.log('Camera error', err);
    }, {
      quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 250,
      targetHeight: 250,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY),
      saveToPhotoAlbum: false
    });

  }
}

export { App }
