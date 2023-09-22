export interface StoreApiResponse {
    count: number;
    next: number;
    previus: number;
    results: StoreListDetailApiResponse[];
}

export interface StoreListDetailApiResponse {
    id: number,
    name: String,
    domain: String,
    slug: String,
    games_count: number,
    image_background: String,
    games: StoreGameDetailApiResponse[]
}

export interface StoreGameDetailApiResponse {
    id: number,
    slug: String
    name: String,
    added: number
}

export interface StoreDetailApiResponse {
    id: number,
    name: String,
    domain: String,
    slug: String,
    games_count: number,
    image_background: String,
    description: String
}

export interface GameDetailApiResponse {
    id: number,
    slug: String,
    name: String,
    name_original: String,
    description: String,
    metacritic: number,
    metacritic_platforms: GameMetacriticApiResponse[],
    background_image: String,
    background_image_additional: String,
    website: String,
    rating: number,
    rating_top: number
}

export interface GameMetacriticApiResponse {
    metascore: number,
    url: String,
    platform: GamePlatformApiResponse
}

export interface GamePlatformApiResponse {
    platform: number,
    name: String,
    slug: String
}

export interface AppState {
    storeId: number,
    games: StoreGameDetailApiResponse[]
}

