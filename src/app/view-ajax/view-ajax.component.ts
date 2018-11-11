import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-view-ajax',
  templateUrl: './view-ajax.component.html',
  styleUrls: ['./view-ajax.component.css']
})
export class ViewAjaxComponent implements OnInit {

  ajaxTitle: string;
  ajaxTitle2: string;
  http;
  url = environment.url;

  constructor(http: HttpService) {
    this.http = http;
  }

  ngOnInit() {
    this.getAjaxDataPromise(this.url);
    this.getAjaxDataObservable(this.url);
  }

  getAjaxDataPromise(url: string) {
    this.http.getContentPromise(url)
      .then(data => {
        if (!data.ok) { throw Error(data.status); }
        return data.json();
      })
      .then(msg => {
        console.log(`ajax title: ${msg.title}`);
        this.ajaxTitle = msg.title;
      })
      .catch(error => {
        console.log(error);
        this.ajaxTitle = error.message;
      });
  }

  getAjaxDataObservable(url: string) {
    this.http.getContentObservable(url)
      .subscribe(title => {
        console.log(`ajax title 2: ${title}`);
        this.ajaxTitle2 = title;
      });
  }


}
