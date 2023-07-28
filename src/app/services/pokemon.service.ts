import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import{Data} from '../models/pokemon.model'


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiPokemon = "https://pokeapi.co/api/v2";

  constructor (
    private http:HttpClient
  ) {}


  getPokemonList(limit:number, offset:number) {
    return this.http.get<Data>(`${this.apiPokemon}/pokemon`,{
      params:{limit, offset}

    })
  }

  getPokemonDetail (url:string) {
    return this.http.get<any>(url)
  }

  getPokemonTypes () {
    return this.http.get<Data>(`${this.apiPokemon}/type`)
  }

  getPokemonByType (type:string|null){
    return this.http.get<any>(`${this.apiPokemon}/type/${type}`)
  }

  getAllPokemon (limit:number, offset:number) {
    return this.http.get<Data>(`${this.apiPokemon}/pokemon`,{
      params:{limit, offset}

    })
  }

}
