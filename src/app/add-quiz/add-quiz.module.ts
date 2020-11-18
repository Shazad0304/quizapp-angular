import { CommonModule } from '@angular/common';
import { Component, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { AddQuizComponent } from './add-quiz.component';
import {MatCardModule} from '@angular/material/card';
import { AuthguardteacherService } from '../authguardteacher.service';

const routes = [
    {
        path: 'addquiz',
        component: AddQuizComponent,
        //canActivate:[AuthguardteacherService]
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
        MatButtonModule,
        MatCardModule
    ],
    providers: []
})
export class AddQuizModule {
}