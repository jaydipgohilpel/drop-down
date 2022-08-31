import { Component, ElementRef, ViewChild } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content') elementView: ElementRef;
  parentdiv:string='';
  contentHeight: number;
  activeCustomers = [
    'John',
    'Watson',
    'ADFE'
  ];

  inactiveCustomers = [
    'Adam',
   
  ];
  constructor(){

  }
  ngAfterViewInit() {
   
    
  }
  imageLoad()
  {
    // debugger;
    this.parentdiv=this.elementView.nativeElement.offsetHeight.toString();
    // this.parentdiv+='!important'
    console.log( this.elementView.nativeElement.offsetHeight);
}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.pre = `
activeCustomers:
${JSON.stringify(this.activeCustomers, null, ' ')}

inactiveCustomers:
${JSON.stringify(this.inactiveCustomers, null, ' ')}`;
  }

  markdown = `
# Material Design: Angular 7, drag-and-drop list
requires:
- \`CdkDragDrop\`, \`moveItemInArray\` and \`transferArrayItem\` imports
- \`cdkDropList\` directive and \`cdkDropListDropped\` event
- CSS \`flex\` layout

`;

  pre = `
activeCustomers:
${JSON.stringify(this.activeCustomers, null, ' ')}

inactiveCustomers:
${JSON.stringify(this.inactiveCustomers, null, ' ')}`;
}
