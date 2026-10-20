// STEP3: generar la interface de respuesta de la petición
// que vamos a implementar: ng g interface interfaces/episode-list-response

export interface EpisodeListResponse {
  info: Info
  results: Episode[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: string | null
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
