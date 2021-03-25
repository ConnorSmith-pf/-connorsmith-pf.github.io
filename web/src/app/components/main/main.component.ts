import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'pf-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public readonly routerService: ActivatedRoute) {
  }

  public ngOnInit(): void {

  }
}
