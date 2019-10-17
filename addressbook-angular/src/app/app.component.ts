import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  delay = 1000;

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event) => {
      this.activatedRoute.data.subscribe((data) => {
        const title = data.title;
        console.log(data);
      });
    })
  }
}
