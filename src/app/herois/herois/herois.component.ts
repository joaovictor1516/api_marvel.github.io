import { Component, OnInit } from '@angular/core';

import { MarvelService } from 'src/app/api/marvel.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit{
  heros: any[] = [];

  constructor(private marvelService: MarvelService){}

  ngOnInit(){
    this.marvelService.getCharacters().subscribe(
      (response: any) => {
        this.heros = response.data.results;
        console.log(this.heros);
      }, (error: any) => {
        console.error(error);
      }
    )
  }
}
