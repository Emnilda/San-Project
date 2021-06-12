import { Component, OnInit } from '@angular/core';
import { WcagService } from 'src/app/services/wcag.service';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss']
})
export class SafetyComponent implements OnInit {

  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  constructor(
    private wcag:WcagService
  ) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
  }
}
