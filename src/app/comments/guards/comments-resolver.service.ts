import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CommentsService } from '../comments.service';
import { Comments } from '../comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService implements Resolve<Comments[]> {

  constructor(private commentsService: CommentsService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.commentsService.getComments()
  }
}
