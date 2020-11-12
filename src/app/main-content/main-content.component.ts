import { Component, OnInit, Input } from "@angular/core";
import { IQuestion, IAns, IResults, IUsers } from "../interfaceQuestion";
import { QuestiongetterService } from "../questiongetter.service";
import { timer } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { AuthguardService } from "../authguard.service";
import { ActivatedRoute } from "@angular/router";
import { WebcamImage, WebcamInitError } from "ngx-webcam";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"],
})
export class MainContentComponent implements OnInit {
  timeLeft: number = 15;
  interval;
  subscribeTimer: any;
  data: any;
  count = 0;
  answer: string;
  Answers: IResults;
  user: any;
  check: boolean = false;
  constructor(
    private getq: QuestiongetterService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("quiz-user"));

    this.activatedRoute.params.subscribe((params) => {
      //dadbf46b-e316-4151-a7f4-66c7cee3ab35
      const id = params["id"];

      if (id) {
        this.Answers = {
          code: id,
          attemptedBy: this.user.id,
          answers: [],
        };
        this.getq
          .getQuizBycode(id)
          .then((x) => {
            console.log(x);
            this.data = x;
            this.data.questions = this.shuffle(this.data.questions);
            this.startTimer();
          })
          .catch((err) => {
            this.toastr.error("No Quiz Found", "", {
              timeOut: 2000,
            });
            setTimeout(() => {
              window.location.replace("/login");
            }, 2000);
          });
      } else {
        this.toastr.error("Something went wrong try again later", "", {
          timeOut: 2000,
        });
        setTimeout(() => {
          window.location.replace("/login");
        }, 2000);
      }
    });
  }

  changeq() {
    if (this.count === this.data.questions.length - 1) {
      this.pauseTimer();
      this.check = true;
      console.log(this.Answers);
      this.submitAnswers();
    }
    this.toastr.success("Submitted", "", {
      timeOut: 2000,
    });
    this.saveAnswer();
    this.count = this.count + 1;
    this.timeLeft = 15;
    this.answer = null;
  }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe((val) => {
      console.log(val, "-");
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 1) {
        this.timeLeft--;
      } else {
        if (this.count === this.data.questions.length - 1) {
          this.pauseTimer();
          this.check = true;
          this.triggerSnapshot();
          console.log(this.Answers);
          this.submitAnswers();
        } else {
          if (this.answer != null || this.answer != undefined) {
            this.toastr.success("Submitted", "", {
              timeOut: 2000,
            });
          } else {
            this.toastr.error("Time Out", "", {
              timeOut: 2000,
            });
          }
        }
        this.saveAnswer();
        this.answer = null;
        this.count = this.count + 1;
        this.timeLeft = 15;
      }
    }, 1000);
  }

  saveAnswer() {
    this.Answers.answers.push({
      ques: this.data.questions[this.count].question,
      ans: this.answer,
    });
  }

  submitAnswers() {
    this.getq.saveAnswers(this.Answers).then((x) => {
      this.toastr.success("Submitted to instructor", "", {
        timeOut: 2000,
      });
    });
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

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

  //snap taking

  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info("received webcam image", webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleInitError(error: WebcamInitError): void {
    if (
      error.mediaStreamError &&
      error.mediaStreamError.name === "NotAllowedError"
    ) {
      this.toastr.error("Camera access not granted", "", {
        timeOut: 2000,
      });
      setTimeout(() => {
        window.location.replace("/login");
      }, 2000);
    }
  }
}
