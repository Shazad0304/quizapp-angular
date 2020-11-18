import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QuestiongetterService } from '../questiongetter.service';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.css']
})

export class QuizListComponent implements OnInit {
    entity:any = JSON.parse(localStorage.getItem("quiz-user"))
    quizList: any
    displayedColumns: string[] = [
        'createdDate',
        'title',
        'code',
        'active'
    ];
    limit: number = 20;
    dataSource: MatTableDataSource<any>;
    totalLength: Number = 0;
    pageIndex: Number = 0;
    pageLimit: Number[] = [5, 10, 25, 100];

    constructor(private service:QuestiongetterService,private router:Router){

    }

    ngOnInit() {
        //get quiz list
        this.service.getAllQuizByUser(this.entity.id).then(x => {
            console.log(x);
            this.quizList = x;
            this.dataSource = new MatTableDataSource(this.quizList);
            this.totalLength = this.quizList.length;
            this.limit = 20;
            this.pageIndex = 0;
        })
    }

    navigatetoadd(){
        this.router.navigate(["/addquiz"]);
    }
    
    deletequiz(code){
        this.service.delquiz(code).then(x => {
            this.ngOnInit();
        })
    }

    navigatetoresult(code){
        this.router.navigate([`/attempted-list/${code}`]);
    }
}