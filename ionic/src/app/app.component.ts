import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {faHome, faUtensils, faFish, faCookie, faWineBottle, faDrumstickBite} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Acceuil',
      url: '/home',
      icon: faHome
    },
    {
      title: 'Sauces Africaines',
      url: '/menu/sauces',
      icon: faUtensils,
      nom: ' sauces'
    },
    {
      title: 'Recettes de Viandes',
      url: '/menu/viande',
      icon: faDrumstickBite,
      nom: 'viande'

    },
    {
      title: 'Recettes de Poissons',
      url: '/menu/poisson',
      icon: faFish,
      nom: 'poisson'
    },
    {
      title: 'Recettes de Riz',
      url: '/menu/riz',
      icon: faUtensils,
      nom: ' riz'

    },
    {
      title: 'Boisons Africaines',
      url: '/menu/boissons',
      icon: faWineBottle,
      nom: 'boissons'
    },
    {
      title: 'Beignets Africaines',
      url: '/menu/beignet',
      icon: faCookie,
      nom: 'beignet'
    }
  ];

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
}
