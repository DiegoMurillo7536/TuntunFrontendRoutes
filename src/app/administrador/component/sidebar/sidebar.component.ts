import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap'
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private _config:NgbAccordionConfig) { 
    _config.closeOthers=true;
  }

  nomodificar($event:NgbPanelChangeEvent){
  if ($event.panelId === 'panel1' && $event.nextState === false){
    $event.preventDefault();  }
  }



  ngOnInit(): void {
  }

}
