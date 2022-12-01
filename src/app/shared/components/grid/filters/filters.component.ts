import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  showChild: boolean = false;
  @Input() filterOpened!: boolean

  @Output() isFilter = new EventEmitter<boolean>()

  
  ngOnInit(): void {
  }
  
  closeFilters(){
    this.filterOpened = false;
    this.isFilter.emit(this.filterOpened)
  }
}
