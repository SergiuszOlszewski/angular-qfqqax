import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { technologies } from '../technologies';

@Component({
  selector: 'app-technologies-list',
  templateUrl: './technologies-list.component.html',
  styleUrls: ['./technologies-list.component.css']
})
export class TechnologiesListComponent {
  technologies = technologies;

}