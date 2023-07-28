import { Component,OnInit } from '@angular/core';

import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';
import{PokemonService} from '../../services/pokemon.service'
import {PokemonDetail} from '../../models/pokemon.model'

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: PokemonDetail = {
    id: 0,
    name: "",
    sprite: "",
    shinySprite: "",
    types: []
  }

  shiny:boolean = false;

  constructor(
    private detail : PokemonDetailService,
    private pokemonservices: PokemonService
  ){}

  ngOnInit (): void{
   this.detail.pokemonDetail.subscribe(url => {
    this.pokemonservices.getPokemonDetail(url).subscribe(data => {
      this.pokemonDetail.id = data.id;
      this.pokemonDetail.name = data.name;
      this.pokemonDetail.sprite = data.sprites.front_default;
      this.pokemonDetail.shinySprite = data.sprites.front_shiny;
      this.pokemonDetail.types = data.types;
      this.shiny = false
    })

   })
  };

  selected() {
    this.shiny = !this.shiny
  }

}
