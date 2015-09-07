class App {
  constructor (options) {
    let self = this;
    console.log('Starting the app');

    self.pictureBtn = document.getElementById('choose-a-picture-btn');
    self.pictureBtn.onclick = self.pictureChooseBtnClicked.bind(self);

    self.image = document.getElementById('image');
  }

  pictureChooseBtnClicked (e) {
    let self = this;

    console.log('button clicked', e);

    let opts = {
      quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 250,
      targetHeight: 250,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY),
      saveToPhotoAlbum: false
    };

    navigator.camera.getPicture(self.cameraSuccess.bind(self), self.cameraError.bind(self), opts);
  }

  cameraSuccess (imageData) {
    let self = this;
    console.log('Camera success', imageData);

    self.image.src = `data:image/png;base64,${imageData}`;
  }

  cameraError (err) {
    console.log('Camera error', err);
  }

}

export { App }
