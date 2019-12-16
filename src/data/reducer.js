const holdArtists = (state, { id, name, bio, image }) => {
    return {...state,
        id,
        name,
        bio,
        image,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "holdArtists": return holdArtists(state); 
        default: return state;
    } 
};

export default reducer