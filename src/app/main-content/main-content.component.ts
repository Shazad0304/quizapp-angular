import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, IAns } from '../interfaceQuestion';
import { QuestiongetterService } from '../questiongetter.service';
import { timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})


export class MainContentComponent implements OnInit {
  timeLeft: number = 10;
  interval;
  subscribeTimer: any;
  data: IQuestion[]
  ans: IAns[] = []
  count = 0;
  constructor(private getq:QuestiongetterService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getq.getQues().subscribe(x => {
      
      for(let i of x){
        if(i.opt1[0] == '*'){
          i.opt1 = i.opt1.replace('*','');
          this.ans.push({question:i.question,answer:i.opt1})
        }
        else if(i.opt2[0] == '*'){
          i.opt2 = i.opt2.replace('*','');
          this.ans.push({question:i.question,answer:i.opt2})
        }
        else if(i.opt3[0] == '*'){
          i.opt3 = i.opt3.replace('*','');
          this.ans.push({question:i.question,answer:i.opt3})
        }
        else if(i.opt4[0] == '*'){
          i.opt4 = i.opt4.replace('*','');
          this.ans.push({question:i.question,answer:i.opt4})
        }
      }
      this.data = x;
      console.log(this.ans);
    });
    this.startTimer();
    
  }
  ok(ev){
console.log(ev)
  }

  changeq(){
    this.toastr.success('Submitted','',{
      timeOut: 2000
    })
    this.count = this.count +1;
    this.timeLeft = 10;

  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 1) {
        this.timeLeft--;
      }
      else {
        this.toastr.error('Time Out','',{
          timeOut: 2000
        })
        this.count = this.count +1;
        this.timeLeft = 10;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


}
