import StatisticView from './statistic-view';

export default class {

  constructor() {
    this._view = new StatisticView();
  }

  init() {
    this._view.show();
  }

}