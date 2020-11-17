import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './attempted-list.component.html',
    styleUrls: ['./attempted-list.component.css']
})

export class AttemptedListComponent implements OnInit {
    attemptList: Array<any> = [
        {
            date: '11/12/2020',
            name: "Qasim",
            score: "10",
        },
        {
            date: '11/12/2020',
            name: "Shazad",
            score: "10",
        },
        {
            date: '11/12/2020',
            name: "Sherry",
            score: "10",
        }
    ];
    displayedColumns: string[] = [
        'date',
        'name',
        'score',
        'actions'
    ];
    limit: number = 20;
    dataSource: MatTableDataSource<any>;
    totalLength: Number = 0;
    pageIndex: Number = 0;
    pageLimit: Number[] = [5, 10, 25, 100];

    ngOnInit() {
        //get quiz list
        this.dataSource = new MatTableDataSource(this.attemptList);
        this.totalLength = this.attemptList.length;
        this.limit = 20;
        this.pageIndex = 0;
    }
}