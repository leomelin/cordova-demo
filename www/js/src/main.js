import { App } from './app';

class Main {
  constructor (options) {
    let self = this;
    self.message = 'App init successful';

    document.addEventListener('deviceready', self.init.bind(self), false);
    document.addEventListener('pause', self.pause.bind(self), false);
    document.addEventListener('resume', self.resume.bind(self), false);
    document.addEventListener('offline', self.offline.bind(self), false);
    document.addEventListener('online', self.offline.bind(self), false);
  }

  init (e) {
    window.addEventListener('orientationchange', this.orientationChange);
    document.addEventListener('backbutton', this.backButtonPressed, false)

    console.log('Init message', this.message);
    this.app = new App();
  }

  pause () {
    console.log('Device paused');
  }

  resume () {
    console.log('Device resumed');
  }

  offline () {
    console.log('Device offline');
  }

  online () {
    console.log('Device online');
  }

  orientationChange () {
    console.log('Orientation changed');
  }

  backButtonPressed () {
    console.log('back button pressed');
  }
}

let main = new Main();
