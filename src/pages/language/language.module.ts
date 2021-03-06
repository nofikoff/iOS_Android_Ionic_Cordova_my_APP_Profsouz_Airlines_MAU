import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LanguagePage} from './language';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from "../../app/app.module";
import {HttpClient} from "@angular/common/http";

@NgModule({
    declarations: [
        LanguagePage,
    ],
    imports: [
        IonicPageModule.forChild(LanguagePage),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
    ],
    exports: [
        LanguagePage
    ]
})
export class LanguagePageModule {
}
