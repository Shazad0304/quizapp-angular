import { Component, NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';

const routes = [
    {
        path: 'quiz-list',
        component: QuizListComponent,
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
        MatIconModule
    ],
    providers: []
})
export class QuizListModule {
}