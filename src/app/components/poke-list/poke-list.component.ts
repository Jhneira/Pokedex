import { Component,Input, OnChanges } from '@angular/core';

import {PokemonService} from '../../services/pokemon.service'
import {Results} from '../../models/pokemon.model'
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';


@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnChanges {

  @Input() limit:number = 20;
  @Input() offset:number = 0;

  @Input() type: string | null = "";

  pokemonList: Results[] = [];
  typeList: Results[] = [];

  constructor(
    private pokemonservices : PokemonService,
    private detail : PokemonDetailService
  ){}



  ngOnChanges(): void {
    if(this.type === 'all') {
      this.pokemonservices.getPokemonList(this.limit,this.offset)
      .subscribe(data => {
        this.pokemonList= this.pokemonList.concat(data.results);
        this.getPokemonId(this.pokemonList)

      })

    } else {
      this.typeList = [];
      this.pokemonservices.getPokemonByType(this.type).subscribe(data =>{
        let results = data.pokemon;
        for (let result of results) {
          let pokemon = result.pokemon;
          this.typeList = [...this.typeList, pokemon ]
        }
        this.getPokemonId(this.typeList)
      })


    }
  }

  getPokemonId (list:Results[]) {
    list.map(data => {
      const id = data.url.slice(34,-1);
      data.id = id
    })
  }

  pokemonDetail(url:string) {
    this.detail.pokemonDetail.emit(url)
  }

}
