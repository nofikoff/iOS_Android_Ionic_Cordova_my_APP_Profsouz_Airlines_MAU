import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastController, Toast} from "ionic-angular";


@Injectable()
export class Flash {

    private toasts: Toast[] = [];

    constructor(public http: HttpClient,
                public toastCtrl: ToastController) {
    }

    push(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'top',
            cssClass: 'danger',
            showCloseButton: true
        });

        toast.onDidDismiss(() => {
            this.toasts.shift();
            if (this.toasts.length > 0) {
                this.show()
            }
        });

        this.toasts.push(toast);

        if (this.toasts.length === 1) {
            this.show()
        }
    }

    show() {
        this.toasts[0].present();
    }
}
