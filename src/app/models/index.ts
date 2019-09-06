export interface RequestParams {
    sensor: boolean;
    address: string;
}

export interface SearchResponse {
    results: SearchResults[];
    status: string;
}

export interface SearchResults {
    geometry: Geometry;
    address_components: AddressComponent[];
    types: string[];
}

export interface Geometry {
    location: Location;
    location_type: string;
    viewport: ViewPort;
}

export interface Location {
    lng: number;
    lat: number;
}

export interface ViewPort {
    northeast: Location;
    southwest: Location;
}

export interface AddressComponent {
    types: string[];
    short_name: string;
    long_name: string;
}

