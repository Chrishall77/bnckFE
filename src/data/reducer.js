const setArtists = (state, action) => {
    return {
        ...state,
        artists: action.artists,
    }
}

const setStages = (state, action) => {
    return {
        ...state,
        stages: action.stages,
    }
}

const setStage = (state, action) => {
    return {
        ...state,
        stage: action.stage,
    }
}

const setPerformances = (state, action) => {
    return {
        ...state,
        performances: action.performances,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setStages": return setStages(state, action);
        case "setStage": return setStage(state, action); 
        case "setArtists": return setArtists(state, action); 
        case "setPerformances": return setPerformances(state, action); 
        default: return state;
    } 
};

export default reducer