export class ContactService {
    contacts: Contact[];
    selected: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
            {"id": 3, "name": "Udi"},
            {"id": 4, "name": "Tommy"},
        ];

        this.selected = [];
    }

    toggleSelection(contact) {
        contact.selected = !contact.selected;

        if(contact.selected) {
            this.selected.push(contact);
        }
        else {
            const index = this.contacts.findIndex(c => c.id == contact.id);
            if(index != -1) {
                this.selected.splice(index, 1);
            }
        }
    }
}

export interface Contact {
    id: number;
    name: string;
    selected: boolean;
}
