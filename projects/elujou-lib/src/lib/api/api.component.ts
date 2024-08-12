import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SisendInformatsioon } from './content';
import { ApiService } from './api.service';

@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: [ './api.component.scss' ],
  standalone: true,
  imports: [ CommonModule ]
  
})
export class ApiComponent {
  sisendInfo: SisendInformatsioon;
  sisendInfomodel1y2: SisendInformatsioon;
  sisendInfomodel1y3: SisendInformatsioon;
  sisendInfomodel2y1: SisendInformatsioon;
  sisendInfomodel2y2: SisendInformatsioon;
  sisendInfomodel2y3: SisendInformatsioon;
  sisendInfomodel3y1: SisendInformatsioon;
  sisendInfomodel3y2: SisendInformatsioon;
  sisendInfomodel3y3: SisendInformatsioon;
  sisendInfomodel4y1: SisendInformatsioon;
  sisendInfomodel4y2: SisendInformatsioon;
  sisendInfomodel4y3: SisendInformatsioon;
  sisendInfomodel5y1: SisendInformatsioon;
  sisendInfomodel5y2: SisendInformatsioon;
  sisendInfomodel5y3: SisendInformatsioon;
  sisendInfoemtak: SisendInformatsioon;
  sisendInfoaasta: SisendInformatsioon;
  sisendInfoviga: SisendInformatsioon;
  sisendInforohkem: SisendInformatsioon;

  constructor(public apiService: ApiService) {
    this.sisendInfo = {} as SisendInformatsioon;
    this.sisendInfomodel1y2 = {} as SisendInformatsioon;
    this.sisendInfomodel1y3 = {} as SisendInformatsioon;
    this.sisendInfomodel2y1 = {} as SisendInformatsioon;
    this.sisendInfomodel2y2 = {} as SisendInformatsioon;
    this.sisendInfomodel2y3 = {} as SisendInformatsioon;
    this.sisendInfomodel3y1 = {} as SisendInformatsioon;
    this.sisendInfomodel3y2 = {} as SisendInformatsioon;
    this.sisendInfomodel3y3 = {} as SisendInformatsioon;
    this.sisendInfomodel4y1 = {} as SisendInformatsioon;
    this.sisendInfomodel4y2 = {} as SisendInformatsioon;
    this.sisendInfomodel4y3 = {} as SisendInformatsioon;
    this.sisendInfomodel5y1 = {} as SisendInformatsioon;
    this.sisendInfomodel5y2 = {} as SisendInformatsioon;
    this.sisendInfomodel5y3 = {} as SisendInformatsioon;
    this.sisendInfoemtak = {} as SisendInformatsioon;
    this.sisendInfoaasta = {} as SisendInformatsioon;
    this.sisendInfoviga = {} as SisendInformatsioon;
    this.sisendInforohkem = {} as SisendInformatsioon;
  }

  sisendInfo2: string;
  sisendInfo2model1y2: string;
  sisendInfo2model1y3: string;
  sisendInfo2model2y1: string;
  sisendInfo2model2y2: string;
  sisendInfo2model2y3: string;
  sisendInfo2model3y1: string;
  sisendInfo2model3y2: string;
  sisendInfo2model3y3: string;
  sisendInfo2model4y1: string;
  sisendInfo2model4y2: string;
  sisendInfo2model4y3: string;
  sisendInfo2model5y1: string;
  sisendInfo2model5y2: string;
  sisendInfo2model5y3: string;
  sisendInfo2emtak: string;
  sisendInfo2aasta: string;
  sisendInfo2viga: string;
  sisendInfo2rohkem: string;

  //esimenesisend: any;
  //mudel: any;
  
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((response: SisendInformatsioon) => {
      debugger;
      console.log("Apist sisse tulev:", response);
      this.sisendInfo = response?.results[0].model1y1;
      //console.log("test2", this.sisendInfo); //peaks sama massiiv olema...
      console.log("model1y1", this.sisendInfo);
      this.sisendInfomodel1y2 = response?.results[0].model1y2;
      this.sisendInfomodel1y3 = response?.results[0].model1y3;
      this.sisendInfomodel2y1 = response?.results[0].model2y1;
      this.sisendInfomodel2y2 = response?.results[0].model2y2;
      this.sisendInfomodel2y3 = response?.results[0].model2y3;
      this.sisendInfomodel3y1 = response?.results[0].model3y1;
      this.sisendInfomodel3y2 = response?.results[0].model3y2;
      this.sisendInfomodel3y3 = response?.results[0].model3y3;
      this.sisendInfomodel4y1 = response?.results[0].model4y1;
      this.sisendInfomodel4y2 = response?.results[0].model4y2;
      this.sisendInfomodel4y3 = response?.results[0].model4y3;
      this.sisendInfomodel5y1 = response?.results[0].model5y1;
      this.sisendInfomodel5y2 = response?.results[0].model5y2;
      this.sisendInfomodel5y3 = response?.results[0].model5y3;
      this.sisendInfoemtak = response?.results[0].emtak;
      this.sisendInfoaasta = response?.results[0].aasta;
      this.sisendInfoviga = response?.results[0].viga;
      this.sisendInforohkem = response?.results;

      this.sisendInfo2 = JSON.stringify(this.sisendInfo);
      localStorage.setItem("model1y1", this.sisendInfo2);

      this.sisendInfo2model1y2 = JSON.stringify(this.sisendInfomodel1y2);
      localStorage.setItem("model1y2", this.sisendInfo2model1y2);

      this.sisendInfo2model1y3 = JSON.stringify(this.sisendInfomodel1y3);
      localStorage.setItem("model1y3", this.sisendInfo2model1y3);

      this.sisendInfo2model2y1 = JSON.stringify(this.sisendInfomodel2y1);
      localStorage.setItem("model2y1", this.sisendInfo2model2y1);

      this.sisendInfo2model2y2 = JSON.stringify(this.sisendInfomodel2y2);
      localStorage.setItem("model2y2", this.sisendInfo2model2y2);

      this.sisendInfo2model2y3 = JSON.stringify(this.sisendInfomodel2y3);
      localStorage.setItem("model2y3", this.sisendInfo2model2y3);

      this.sisendInfo2model3y1 = JSON.stringify(this.sisendInfomodel3y1);
      localStorage.setItem("model3y1", this.sisendInfo2model3y1);

      this.sisendInfo2model3y2 = JSON.stringify(this.sisendInfomodel3y2);
      localStorage.setItem("model3y2", this.sisendInfo2model3y2);

      this.sisendInfo2model3y3 = JSON.stringify(this.sisendInfomodel3y3);
      localStorage.setItem("model3y3", this.sisendInfo2model3y3);  
      
      this.sisendInfo2model4y1 = JSON.stringify(this.sisendInfomodel4y1);
      localStorage.setItem("model4y1", this.sisendInfo2model4y1);

      this.sisendInfo2model4y2 = JSON.stringify(this.sisendInfomodel4y2);
      localStorage.setItem("model4y2", this.sisendInfo2model4y2);

      this.sisendInfo2model4y3 = JSON.stringify(this.sisendInfomodel4y3);
      localStorage.setItem("model4y3", this.sisendInfo2model4y3);

      this.sisendInfo2model5y1 = JSON.stringify(this.sisendInfomodel5y1);
      localStorage.setItem("model5y1", this.sisendInfo2model5y1);

      this.sisendInfo2model5y2 = JSON.stringify(this.sisendInfomodel5y2);
      localStorage.setItem("model5y2", this.sisendInfo2model5y2);

      this.sisendInfo2model5y3 = JSON.stringify(this.sisendInfomodel5y3);
      localStorage.setItem("model5y3", this.sisendInfo2model5y3);

      this.sisendInfo2emtak = JSON.stringify(this.sisendInfoemtak);
      localStorage.setItem("emtak", this.sisendInfo2emtak);

      this.sisendInfo2aasta = JSON.stringify(this.sisendInfoaasta);
      localStorage.setItem("aasta", this.sisendInfo2aasta);

      this.sisendInfo2viga = JSON.stringify(this.sisendInfoviga);
      localStorage.setItem("viga", this.sisendInfo2viga);

      this.sisendInfo2rohkem = JSON.stringify(this.sisendInforohkem);
      localStorage.setItem("rohkem", this.sisendInfo2rohkem);

    });
  }



}