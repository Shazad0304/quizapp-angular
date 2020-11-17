import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.css']
})

export class QuizListComponent implements OnInit {
    quizList: Array<any> = [
        {
            createDate: '11/12/2020',
            title: "Quiz 1",
            description: "The quiz is for chapter 2"
        },
        {
            createDate: '11/12/2020',
            title: "Quiz 2",
            description: "The quiz is for chapter 3"
        },
    ];
    displayedColumns: string[] = [
        'createdDate',
        'title',
        'active'
    ];
    limit: number = 20;
    dataSource: MatTableDataSource<any>;
    totalLength: Number = 0;
    pageIndex: Number = 0;
    pageLimit: Number[] = [5, 10, 25, 100];

    ngOnInit() {
        //get quiz list
        this.dataSource = new MatTableDataSource(this.quizList);
        this.totalLength = this.quizList.length;
        this.limit = 20;
        this.pageIndex = 0;
    }
}