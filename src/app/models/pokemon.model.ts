
export interface Data {
  count: number,
  next: string,
  previous: string,
  results: Results []
}

export interface PokemonDetail {
  id: number,
  name: string,
  sprite: string,
  shinySprite: string,
  types: Types[]
}



export interface Results {
  name: string,
  url: string,
  id: string
}

export interface Types {
  slot: number,
  type: {
    name: string,
    url: string
  }
}
