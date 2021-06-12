import { Component, OnInit } from '@angular/core';
import { WcagService } from 'src/app/services/wcag.service';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  darkMode = false;
  bigFont = false;
  letterSpacing = false;
  lineSpacing = false;
  myLang='pl'
  constructor(
    private wcag: WcagService,
    private lang: LangService
  ) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.darkMode = this.wcag.darkMode
    this.bigFont = this.wcag.bigFont
    this.letterSpacing = this.wcag.letterSpacing
    this.lineSpacing = this.wcag.lineSpacing
    this.myLang = this.lang.lang
  }

}
