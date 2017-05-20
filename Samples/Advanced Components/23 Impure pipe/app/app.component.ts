import {Component, ElementRef} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }


    ngDoCheck() {
        console.log("ngDoCheck");
    }

    none() {
    }

    change() {
        this.contacts[0].name = "XXX";
    }
}

export interface Contact {
    id: number;
    name: string;
}


