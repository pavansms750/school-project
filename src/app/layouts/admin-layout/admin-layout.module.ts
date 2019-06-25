import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { StudentComponent } from '../../student/student.component';
import { VideosComponent } from '../../videos/videos.component';
import { WeeklyComponent } from '../../weekly/weekly.component';
import { AddWeeklyComponent } from '../../add-weekly/add-weekly.component';
import { AddVideoComponent } from '../../add-video/add-video.component';
import { EditVideoComponent } from '../../edit-video/edit-video.component';
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';
import { HomeworkComponent } from '../../homework/homework.component'
import { NotifyComponent } from '../../notify/notify.component';
import { CoursesComponent } from '../../courses/courses.component'
import { AbsentComponent } from '../../absent/absent.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    NgxYoutubePlayerModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    ConfirmDeleteComponent,
    DashboardComponent,
    StudentComponent,
    VideosComponent,
    WeeklyComponent,
    AddWeeklyComponent,
    AddVideoComponent,
    EditVideoComponent,
    HomeworkComponent,
    NotifyComponent,
    CoursesComponent,
    AbsentComponent
  ],
  entryComponents: [ConfirmDeleteComponent]
})

export class AdminLayoutModule { }
