import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import { QuestiongetterService } from './questiongetter.service';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QuizListModule } from './quiz-list/quiz-list.module';
import { AddQuizModule } from './add-quiz/add-quiz.module';
import { CommonModule } from '@angular/common';
import { AttemptedListModule } from './quiz-list/attempted-list/attempted-list.module';
import {MatSelectModule} from '@angular/material/select';
import {WebcamModule} from 'ngx-webcam';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    WebcamModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    QuizListModule,
    AddQuizModule,
    CommonModule,
    AttemptedListModule
  ],
  providers: [QuestiongetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
