import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { QuestiongetterService } from '../questiongetter.service';

@Component({
    selector: 'app-add-quiz',
    templateUrl: './add-quiz.component.html',
    styleUrls: ['./add-quiz.component.css']
})

export class AddQuizComponent implements OnInit {
    entity:any = JSON.parse(localStorage.getItem("quiz-user"))
    questions = [{question: '', options: ["option 1", "option 2"],correctoption:''}];
    title: string = '';

    constructor(private service:QuestiongetterService,private router:Router){

    }
    ngOnInit() {
        //get quiz list
    }

    addOption(i){
        this.questions[i].options.push('');
    }

    addQuestion(){
        this.questions.push({question: '', options: ["option 1", "option 2"],correctoption:''});
    }


    saveQuiz(){
        console.log(this.title);
        console.log(this.questions);
        this.questions.forEach((e,i) => {
            e.correctoption = e.options[0];
        })
        this.service.AddQuiz({title:this.title,questions:this.questions,createdBy:this.entity.id}).then(x => {
            console.log(x)
            this.router.navigate(["/quiz-list"])
        })
    }
}