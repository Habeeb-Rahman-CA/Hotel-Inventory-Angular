import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { map, Observable, pluck } from 'rxjs';
import { Comments } from './comments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  comments$ = this.commentService.getComments()

  comment$ = this.activatedRoute.data.pipe(
    map(data => data['comments'])
  )

  constructor(private commentService: CommentsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
