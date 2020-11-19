import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestiongetterService } from '../questiongetter.service';

@Component({
    selector: 'app-add-quiz',
    templateUrl: './add-quiz.component.html',
    styleUrls: ['./add-quiz.component.css']
})

export class AddQuizComponent implements OnInit {
    entity:any = JSON.parse(localStorage.getItem("quiz-user"))
    questions = [{question: '', options: [""],correctoption:''}];
    title: string = '';

    constructor(private service:QuestiongetterService,private router:Router,private toast:ToastrService){

    }
    ngOnInit() {
        //get quiz list
    }

    addOption(i){
        this.questions[i].options.push('');
    }

    addQuestion(){
        this.questions.push({question: '', options: [""],correctoption:''});
    }


    saveQuiz(){
        console.log(this.title);
        console.log(this.questions);
        if(!this.title && this.questions.findIndex(x => x.options.findIndex(i => i === "") > -1 || x.question === "") > -1){
            this.toast.error("Please fill all the fields");
            return
        }
        else if(this.questions.length < 10){
            this.toast.error("Minimum 10 questions are required");
            return
        }
        this.questions.forEach((e,i) => {
            e.correctoption = e.options[0];
        })
        this.service.AddQuiz({title:this.title,questions:this.questions,createdBy:this.entity.id}).then(x => {
            console.log(x)
            this.toast.success("Quiz Added Successfully")
            this.router.navigate(["/quiz-list"])
        }).catch(err => {
            console.log(err);
            this.toast.error("Something went wrong");
        })
    }

    onValueUpdate(event){
        console.log(event.target.value, event.target.id);
        const ij = event.target.id.split('-');
        this.questions[ij[0]].options[ij[1]] = event.target.value;
    }

    deleteQues(i){
        this.questions.splice(i,1);
    }

    deleteoption(i,j){
        this.questions[i].options.splice(j,1);
    }
}