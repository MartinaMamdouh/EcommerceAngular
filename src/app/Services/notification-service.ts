import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications:string[];
  constructor(){
    this.notifications=[
      'you have new message',
      'you have a new friend request',
      'someone react to your post',
      //'',
      'your post has been published successfully'
    ]
  }
  getNotifications():Observable<string>{
    let observale=new Observable<string>((subscriber)=>{
      let counter:number=0;
      let intrval= setInterval(()=>{
        if(this.notifications[counter]==''){
          subscriber.error();
        }
        if(counter==this.notifications.length){
          subscriber.complete();
        }
        subscriber.next(this.notifications[counter]);
        counter++;
      },2000)
      return {unsubscribe:()=>{clearInterval(intrval)}}
    })
    return observale;
  
  }
}
