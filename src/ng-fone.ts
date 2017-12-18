import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { ToastController } from 'ionic-angular';


@Injectable()
export class NgFone{
    users = [
        {
            "title":"student1",
            "age":22
        },
        {
            "title":"student2",
            "age":33
        }
    ];

    constructor(public toast:ToastController){
        
    }
    
    getStudents(){
        return this.users;
    }
    dash(){
        _.each(this.users,(user)=>console.log(user.title));
    }
    action(){
        
    }
    showToast(){
        let toast = this.toast.create({
            message:"tttt"
        })
        toast.present();
    }

}