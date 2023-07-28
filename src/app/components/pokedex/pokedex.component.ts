import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

import {Results} from '../../models/pokemon.model'
import {PokemonService} from '../../services/pokemon.service'

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  limit: number = 20;
  offset: number = 0;
  open:boolean = false;
  front:boolean = false

  typeField = new FormControl ("all");

  types:Results[] = [{
    name: "all",
    url: "",
    id : ""
  }];

  constructor (
    private pokemonservices : PokemonService
  ) {}

  ngOnInit (): void{
    this.pokemonservices.getPokemonTypes().subscribe (data =>{
      this.types = this.types.concat(data.results);
      this.types= this.types.slice(0,-2)
    })

  };

  openPokedex () {
    this.open = !this.open
    if(this.front) {
      this.front = !this.front
    } else {
      setTimeout(() => {
        this.front = !this.front
      },500)
    }
  }

  morePokemon() {
    if (this.typeField.value === "all") {
      this.offset += this.limit
    }

  }

}
