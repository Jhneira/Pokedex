import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  @Output () pokemonDetail : EventEmitter<string> = new EventEmitter;

  constructor() { }
}
