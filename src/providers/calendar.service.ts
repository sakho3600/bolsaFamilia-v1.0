import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {
  private _hashDate: Map<number, string[]>;

  constructor(){
    this._hashDate = new Map();
    this.loadPayCalendar();
  }

  payDate(key:number): string[] {
    return this._hashDate.get(key);
  }

  // OBS: Implementação provisória
  private loadPayCalendar() {
    this._hashDate.set(1, ["18/01", "13/02", "20/03", "13/04", "18/05", "19/06", "18/07", "18/08", "18/09", "18/10", "17/11", "11/12"]);
    this._hashDate.set(2, ["19/01", "14/02", "21/03", "17/04", "19/05", "20/06", "19/07", "21/08", "19/09", "19/10", "20/11", "12/12"]);
    this._hashDate.set(3, ["20/01", "15/02", "22/03", "18/04", "22/05", "21/06", "20/07", "22/08", "20/09", "20/10", "21/11", "13/12"]);
    this._hashDate.set(4, ["23/01", "16/02", "23/03", "19/04", "23/05", "22/06", "21/07", "23/08", "21/09", "23/10", "22/11", "14/12"]);
    this._hashDate.set(5, ["24/01", "17/02", "24/03", "20/04", "24/05", "23/06", "24/07", "24/08", "22/09", "24/10", "23/11", "15/12"]);
    this._hashDate.set(6, ["25/01", "20/02", "27/03", "24/04", "25/05", "26/06", "25/07", "25/08", "25/09", "25/10", "24/11", "18/12"]);
    this._hashDate.set(7, ["26/01", "21/02", "28/03", "25/04", "26/05", "27/06", "26/07", "28/08", "26/09", "26/10", "27/11", "19/12"]);
    this._hashDate.set(8, ["27/01", "22/02", "29/03", "26/04", "29/05", "28/06", "27/07", "29/08", "27/09", "27/10", "28/11", "20/12"]);
    this._hashDate.set(9, ["30/01", "23/02", "30/03", "27/04", "30/05", "29/06", "28/07", "30/08", "28/09", "30/10", "29/11", "21/12"]);
    this._hashDate.set(0, ["31/01", "24/02", "31/03", "28/04", "31/05", "30/06", "31/07", "31/08", "29/09", "31/10", "30/11", "22/12"]);
  }
}
