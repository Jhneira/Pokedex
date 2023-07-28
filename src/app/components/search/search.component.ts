import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

import {PokemonService} from '../../services/pokemon.service'
import {Results} from '../../models/pokemon.model'
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  allPokemonList:Results[] = [];
  searchField = new FormControl();
  pokemonSearched : Results[] = [];
  showPokemon: boolean = true;


  constructor(
    private pokemonservices : PokemonService,
    private detail : PokemonDetailService
  ){}

  ngOnInit(): void {
    this.pokemonservices.getAllPokemon(10000,0).subscribe(data => {
      this.allPokemonList = data.results;
    })

    this.searchField.valueChanges.subscribe(value => {
      this.searchPokemon(value);
      this.showPokemon = true
    })


  }

  searchPokemon (value:string) {
    this.pokemonSearched = this.allPokemonList.filter(pokemon => {
      return pokemon.name.includes(value)})
  }

  pokemonDetail(url:string) {
    this.detail.pokemonDetail.emit(url),
    this.showPokemon = false

  }

}
