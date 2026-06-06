import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../Services/notification-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  subscribtion!:Subscription;
  constructor(private _notification:NotificationService){

  }
  ngOnInit(): void {
    // this._notification.getNotifications().subscribe((notification)=>{
    //   console.log(notification);
    // });
    //to handle errors dont use callback functions and make object 
    this.subscribtion=this._notification.getNotifications().subscribe({
      next:(notification)=>{console.log(notification)},
      error:()=>{console.log('error: empty notification')},
      complete:()=>{console.log('completed successfully')}
    })
  }
ngOnDestroy(): void {
  this.subscribtion.unsubscribe();
}
}
