import { CollectionReference, DocumentData } from "@angular/fire/firestore";

export class User {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    street: string;
    streetNo: string;
    zipCode: number;
    city: string;
    

    constructor(obj?: any) {  // obj in constructor is nessescary for variables! 
        this.firstName = obj ? obj.firstName : '';   // ist eine if/else abfrage in kurzform; erstes element wird geprüft ob exist, wenn ja, dann wird obj.firstname eingegebn, wenn nicht, kommt leerer string!
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.email = obj ? obj.email : '',
        this.street = obj ? obj.street : '';
        this.streetNo = obj ? obj.streetNo : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            email: this.email,
            street: this.street,
            streetNo: this.streetNo,
            zipCode: this.zipCode,
            city: this.city
        }
    }

}