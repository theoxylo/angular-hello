import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  keyVal;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.keyVal = this.route.snapshot.paramMap.get('key');
  }

}
