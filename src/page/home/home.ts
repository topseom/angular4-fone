import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector:"ng-home",
    template:`<h1>NG HOME</h1>
              <button (click)="test()">click</button>
    `
})
export class NgHome{
    constructor(public alertCtrl:AlertController){

    }
    test(){
        let alert = this.alertCtrl.create({
            title:"test"
        });
        alert.present();
    }
}