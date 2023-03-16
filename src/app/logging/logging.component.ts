import { Component, OnInit } from '@angular/core';
import { LogicalOrCoalescingAssignmentOperator } from 'typescript';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit{

  constructor(public loggingService: LoggingService){
    
  }

  ngOnInit(): void {
    
  }
}
