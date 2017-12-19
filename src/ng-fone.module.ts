import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgFone } from './ng-fone';

import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

import { NgHome } from './page/home/home';
import { IonicModule } from 'ionic-angular';



import { ToastController } from 'ionic-angular';


@NgModule({
    imports: [BrowserModule,IonicModule.forRoot(NgHome)],
    declarations: [NgHome],
    exports: [NgHome],
    providers:[NgFone]
})

export class NgFoneModule{}
