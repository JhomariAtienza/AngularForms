import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent {
  @Output() addClicked = new EventEmitter<void>();
  @Output() deleteAllClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<void>();

  constructor() { }

  onAddClick(): void {
    this.addClicked.emit();
  }

  onDeleteAllClick(): void {
    this.deleteAllClicked.emit();
  }

  onEditClick() {
    this.editClicked.emit();
  }
}
