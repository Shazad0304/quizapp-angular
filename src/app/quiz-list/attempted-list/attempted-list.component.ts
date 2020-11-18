import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { QuestiongetterService } from "src/app/questiongetter.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "src/app/dialog/dialog.component";

@Component({
  selector: "app-quiz-list",
  templateUrl: "./attempted-list.component.html",
  styleUrls: ["./attempted-list.component.css"],
})
export class AttemptedListComponent implements OnInit {
  attemptList: any;
  displayedColumns: string[] = [
    "date",
    "fname",
    "lname",
    "email",
    "score",
    "actions",
  ];
  limit: number = 20;
  dataSource: MatTableDataSource<any>;
  totalLength: Number = 0;
  pageIndex: Number = 0;
  pageLimit: Number[] = [5, 10, 25, 100];

  constructor(
    private service: QuestiongetterService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.service.getAllScoreBycode(params["id"]).then((x) => {
        this.attemptList = x;
        this.dataSource = new MatTableDataSource(this.attemptList);
        this.totalLength = this.attemptList.length;
        this.limit = 20;
        this.pageIndex = 0;
      });
      //get quiz list
    });
  }

  openDialog(images) {
    this.dialog.open(DialogComponent, {
      data: {
        images
      },
      autoFocus: false,
      maxHeight: '90vh',
      maxWidth:'500px'
    });
  }
}
