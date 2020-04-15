import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, IAns, IResults, IUsers } from '../interfaceQuestion';
import { QuestiongetterService } from '../questiongetter.service';
import { timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})


export class MainContentComponent implements OnInit {
  timeLeft: number = 15;
  interval;
  subscribeTimer: any;
  data: IQuestion[]
  count = 0;
  totalpoints = 0;
  answer: string
  user: IResults
  check: boolean = false
  constructor(private getq: QuestiongetterService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getq.getQues().subscribe(x => {
      this.data = this.shuffle(x);
    });
    this.user = this.getq.currentUser;
    this.startTimer();

  }

  changeq() {
    if (this.answer == '1' && this.data[this.count].opt1[0] == '*') { this.totalpoints = this.totalpoints + 1 }
    else if (this.answer == '2' && this.data[this.count].opt2[0] == '*') { this.totalpoints = this.totalpoints + 1 }
    else if (this.answer == '3' && this.data[this.count].opt3[0] == '*') { this.totalpoints = this.totalpoints + 1 }
    else if (this.answer == '4' && this.data[this.count].opt4[0] == '*') { this.totalpoints = this.totalpoints + 1 }
    else if (this.answer == undefined || this.answer == null) {
      this.toastr.error('Please tick the answer', '', {
        timeOut: 2000
      })
      return false;
    }
    if (this.count === 49) {
      this.pauseTimer();
      this.user.points = this.totalpoints;
      this.getq.postPoints(this.user);
      this.check = true;
    }
    this.toastr.success('Submitted', '', {
      timeOut: 2000
    })
    this.count = this.count + 1;
    this.timeLeft = 10;
    this.answer = null;
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
      if (this.timeLeft > 1) {
        this.timeLeft--;
      }
      else {
        if (this.count === 49) {
          this.pauseTimer();
          this.user.points = this.totalpoints;
          this.getq.postPoints(this.user);
          this.check = true;
        } else {
          if (this.answer == '1' && this.data[this.count].opt1[0] == '*') { this.totalpoints = this.totalpoints + 1 }
          else if (this.answer == '2' && this.data[this.count].opt2[0] == '*') { this.totalpoints = this.totalpoints + 1 }
          else if (this.answer == '3' && this.data[this.count].opt3[0] == '*') { this.totalpoints = this.totalpoints + 1 }
          else if (this.answer == '4' && this.data[this.count].opt4[0] == '*') { this.totalpoints = this.totalpoints + 1 }
          if(this.answer != null || this.answer != undefined){this.toastr.success('Submitted', '', {
            timeOut: 2000
          })}
          else{
            this.toastr.error('Time Out', '', {
              timeOut: 2000
            })
          }
        }
        this.answer = null;
        this.count = this.count + 1;
        this.timeLeft = 15;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}
