import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() size: 'lg' | 'md' | 'sm' = 'md';
  @Input() theme: 'light' |'dark' = 'light';
  @Input() showToggle = true;

  private privateCollapsed = false;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  get collapsed() {
    return this.privateCollapsed;
  }

  @Input()
  set collapsed(v) {
    this.privateCollapsed = v;
    // this.toggl

  }

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.toggled.emit(this.collapsed);
  }
}
