import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    show:boolean = true;
    phrase : any = {
        text: 'Great power carries great responsability',
        author: 'Ben parker'
    }
    characters: string[] = ["Spiderman", "Venom", "Dr. Octopus"];

}