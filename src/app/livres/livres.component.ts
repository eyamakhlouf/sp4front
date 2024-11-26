import { Component, OnInit } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit{
  livres! : Livre[];

  constructor(private livreService:LivreService) { }

  ngOnInit(): void {
    
    this.chargerLivres();
  }

  chargerLivres(){
    this.livreService.listeLivre().subscribe((livs) => {
    console.log(livs);
    this.livres = livs;
    });
    }

}

