import { Component } from '@angular/core';
import {Punchline} from "./punchline";

@Component({
    selector: 'scat-app',
    template: '<punchline-form></punchline-form>'
})
export class PunchlineComponent {
    submitted =  false;

    onSubmit() {
        this.submitted = true;
    }

    hidden = false;

    newPunchline() {
        this.model = new Punchline();
    }

}