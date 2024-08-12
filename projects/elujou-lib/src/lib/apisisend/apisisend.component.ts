import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ApiComponent } from '../api/api.component';

@Component({
  selector: 'apisisend',
  templateUrl: './apisisend.component.html',
  styleUrls: ['./apisisend.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, NgClass, ApiComponent ]
})
export class ApisisendComponent {

  value = '12345678';
  tonustring ="http://localhost/eestat/1/elujoud/";
  tonuvalja:string;
  valueChanged(value: string) {
    this.value = value;
    this.tonuvalja = this.tonustring+this.value;
    //console.log(this.value);
    //localStorage.setItem("efektVarv", '1');
    this.valjaParing();
   // this.minaValja();
  }

  valjaParing() {
    this.tonuvalja = this.tonustring+this.value;
    localStorage.setItem('tonuvalja', this.tonuvalja);
    return this.tonuvalja;
  }

  minustring ="https://randomapi.com/api/63o7ci12?key=FD5H-6GAY-LIWY-U43" //viimane on A
  minavalja: string;
  minaValja() {
    this.minavalja = this.minustring+this.value;
    localStorage.setItem('minavalja', this.minavalja);
    return this.minavalja;
  }

  saadudtulem: string;
  saaKatte() {
    this.saadudtulem = localStorage.getItem('model2y2');
    return this.saadudtulem;
  }

  saadudemtak: string;
  saaEmtak() {
    this.saadudemtak = localStorage.getItem('emtak');
    return this.saadudemtak;
  }

  saadudaasta: string;
  saaAasta() {
    this.saadudaasta = localStorage.getItem('aasta');
    return this.saadudaasta;
  }

  saadudviga: string;
  saaViga() {
    this.saadudviga = localStorage.getItem('viga');
    return this.saadudviga;
  }

  saadudrohkem: string;
  saaRohkem() {
    this.saadudrohkem = localStorage.getItem('rohkem');
    return this.saadudrohkem;
  }


ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
 ////   alert("lgaj");
  }

}