import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'الرسائل',
      url: '/message',
     // icon: 'mail'
    },
    {
      title: 'الصندوق',
      url: '/caisse',
     // icon: 'paper-plane'
    },
    {
      title: 'المؤسسة',
      url: '/autrui',
      //icon: 'heart'
    },
    {
      title: 'الفائدة',
      url: '/vaiida',
      //icon: 'archive'
    } ,
    {
      title: 'عن التطبيق',
      url: '/about',
      //icon: 'archive'
    } ,
    {
      title: 'اتصل بنا',
      url: '/contact-us',
      //icon: 'archive'
    } 
  ]
  



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
