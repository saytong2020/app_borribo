import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, { static : true }) routerOutlet :IonRouterOutlet;

  constructor(
    private alertController: AlertController,
    private platform: Platform,
    private location: Location,

  ) {
    this.backButtonEvent();
  }

  backButtonEvent()
  {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutlet.canGoBack()) {
        navigator['app'].exitApp();
        // this.backButtonAlert();
      } else {
        this.location.back();
      }
    });
  }

  // async backButtonAlert() {
  //   const alert = await this.alertController.create({
  //     header: "តើអ្នកប្រាកដ ឬអត់?",
  //     message: 'តើអ្នកចង់ចាកចេញពីកម្មវិធី',
  //     buttons: [{
  //       text: 'បោះបង់',
  //       role: 'cancel'
  //     }, {
  //       text: 'ចាកចេញ',
  //       handler: () => {
  //         navigator['app'].exitApp();
  //       }
  //     }]
  //   });
  //   await alert.present();
  // }
}
