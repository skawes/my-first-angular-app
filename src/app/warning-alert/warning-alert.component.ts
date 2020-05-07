import { Component } from '@angular/core';

@Component({
    selector:'app-warning-alert',
    template:`<p>you are in danger</p>`,
    styles:[`p{
        background-color:red;
    }`]
})
export class WarningAlertComponent{

}