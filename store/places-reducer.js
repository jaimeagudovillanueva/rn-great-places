import { ADD_PLACE, SET_PLACES } from "./places-actions";
import Place from '../models/place';

const initialState = {
    places: []
};

const addPlace = (state, action) => {
    const newPlace = new Place(action.placeData.id.toString(), action.placeData.title, 
        action.placeData.image, action.placeData.address, action.placeData.coords.lat, 
        action.placeData.coords.lng);
    return {
        places: state.places.concat(newPlace)
    }
}

const setPlaces = (action) => {
    return { 
        places: action.places.map(pl => 
            new Place(pl.id.toString(), pl.title, pl.imageUri, pl.address, pl.lat, pl.lng)
        ) 
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE: return addPlace(state, action);
        case SET_PLACES: return setPlaces(action);
        default: return state;
    }
}