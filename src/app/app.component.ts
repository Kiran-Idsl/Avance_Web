import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AvanceService } from './service/avance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Avance_Assignment';
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private service: AvanceService){
    // this.router.events.subscribe((event: any) => {
    //      this.service.shortUrl(event.url)
    //      .subscribe(
    //        (data: any) => {
    //          if (data.status == 'success') {
    //           window.open("https://www.google.com", "_blank");
    //          }
    //          else {
    //          }
    //        });
    // });
  }
  ngOnInit(): void {
    //alert(this.activatedRoute.snapshot.params['queryString'])
  }
}
