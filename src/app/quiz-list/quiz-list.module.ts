import { Component, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthguardteacherService } from '../authguardteacher.service';

const routes = [
    {
        path: 'quiz-list',
        component: QuizListComponent,
        canActivate:[AuthguardteacherService]
    }
];

@NgModule({
    declarations: [
        QuizListComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatTableModule,
        MatTooltipModule,
        MatMenuModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: []
})
export class QuizListModule {
}