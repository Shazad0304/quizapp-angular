import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-add-quiz',
    templateUrl: './add-quiz.component.html',
    styleUrls: ['./add-quiz.component.css']
})

export class AddQuizComponent implements OnInit {

    questions = [{quetion: '', options: ["option 1", "option 2"]}];
    title: string = '';

    ngOnInit() {
        //get quiz list
    }

    addOption(i){
        this.questions[i].options.push('');
    }

    addQuestion(){
        this.questions.push({quetion: '', options: ["option 1", "option 2"]});
    }

    saveQuiz(){
        console.log(this.title);
        console.log(this.questions);
    }
}