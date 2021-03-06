import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'prism-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.less']
})
export class DropdownsComponent implements OnInit {
  selectedColorIndex = 0;


  dropdownValues = [
    {
      icon: "passed",
      label: "Passedddddddddddddddddddddddddddddd",
      value: "passed"
    },
    {
      icon: "plus",
      label: "Plus",
      value: "plus"
    },
    {
      icon: "down",
      label: "Down",
      value: "down"
    },
    {
      icon: "up",
      label: "Up",
      value: "up"
    },
    {
      icon: "failed",
      label: "Failed",
      value: "failed"
    }
  ];

  colors;

  constructor() {
  }

  addItem() {
    this.dropdownValues.push({
      icon: "failed",
      label: "New Item",
      value: "new item"
    })
  }

  clicked($event) {
    // $event.stopPropagation();
    console.log('clicked in controller');
  }

  ngOnInit() {
    setTimeout(() => {
      this.colors = ['#00a0dc', '#8d6cab', '#dd5143', '#e68523', '#edb220'];
      // this.selectedColorIndex = 0;
    }, 5000);
  }

}
