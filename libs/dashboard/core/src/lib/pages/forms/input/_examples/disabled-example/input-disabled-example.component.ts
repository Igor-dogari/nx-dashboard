import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'app-disabled-example',
    imports: [
        MatFormField,
        MatInput,
        MatLabel
    ],
    templateUrl: './input-disabled-example.component.html',
    styleUrl: './input-disabled-example.component.scss'
})
export class InputDisabledExampleComponent {

}
