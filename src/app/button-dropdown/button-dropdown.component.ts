import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss']
})
export class ButtonDropdownComponent implements OnInit {

  dataArr = [
    { 
      name: "arpit",
    },
    {
      name: "umesh",
    },
    {
      name: "sakshi",
    },
    {
      name: "shrishti",
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
