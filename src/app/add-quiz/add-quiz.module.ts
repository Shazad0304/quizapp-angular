import { CommonModule } from '@angular/common';
import { Component, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { AddQuizComponent } from './add-quiz.component';

const routes = [
    {
        path: 'add-quiz',
        component: AddQuizComponent,
    }
];

@NgModule({
    declarations: [
        AddQuizComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        CommonModule,
        FormsModule,
        MatButtonModule
    ],
    providers: []
})
export class AddQuizModule {
}