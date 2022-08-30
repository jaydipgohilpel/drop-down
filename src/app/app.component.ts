import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeCustomers = [
    'John',
    'Watson',
    'ADFE'
  ];

  inactiveCustomers = [
    'Adam',
    'Jack',
    'Katherin'
  ];

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
