import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {

  comments$ = this.commentService.getComments()

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    
  }

}
