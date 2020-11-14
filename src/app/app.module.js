var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Camera } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { Transfer } from '@ionic-native/transfer';
import { Sim } from '@ionic-native/sim';
import { Contacts } from "@ionic-native/contacts";
import { ConferenceApp } from './app.component';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Settings, User, Api, Auth, Flash, Centrifugo } from '../providers';
import { FcmProvider } from '../providers/fcm/fcm';
import { IOSFilePicker } from "@ionic-native/file-picker";
import { AppVersion } from "@ionic-native/app-version";
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new Settings(storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var firebase = {};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            ConferenceApp,
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [HttpClient]
                }
            }),
            IonicModule.forRoot(ConferenceApp, { mode: 'ios' }),
            IonicStorageModule.forRoot(),
            AngularFireModule.initializeApp(firebase),
            AngularFirestoreModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            ConferenceApp,
        ],
        providers: [
            User,
            Api,
            Flash,
            Camera,
            Clipboard,
            InAppBrowser,
            SplashScreen,
            Transfer,
            Centrifugo,
            Firebase,
            FcmProvider,
            Sim,
            Contacts,
            IOSFilePicker,
            { provide: Settings, useFactory: provideSettings, deps: [Storage] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            { provide: HTTP_INTERCEPTORS, useClass: Auth, multi: true },
            AppVersion
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map