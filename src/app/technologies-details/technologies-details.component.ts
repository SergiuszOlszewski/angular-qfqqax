import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { technologies } from '../technologies';

@Component({
  selector: 'app-technologies-details',
  templateUrl: './technologies-details.component.html',
  styleUrls: ['./technologies-details.component.css']
})
export class TechnologiesDetailsComponent implements OnInit {
tech;

  constructor(
    private route: ActivatedRoute,
  ) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.tech = technologies[+params.get('techId')];
  });
}
 rate() {
    window.alert('To będzie robił backend');
  }

}