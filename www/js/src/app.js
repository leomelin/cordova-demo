class App {
  constructor (options) {
    this.message = 'App init successful';
  }

  init (e) {
    console.log('Init message', this.message);
  }
}

export const app = new App();
