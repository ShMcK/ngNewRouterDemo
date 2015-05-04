const name = 'darkGrey';
const Name = name.charAt(0).toUpperCase() + name.slice(1);

class Ctrl{
  constructor() {
    this.test = Name;
  }
}

export default angular.module(`app.${name}`, [])
  .controller(`${Name}Controller`, Ctrl);