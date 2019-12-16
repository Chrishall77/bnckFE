import artists from "./seeds/artists";
import stages from "./seeds/stages";
import performances from "./seeds/performances";

const initial = {
    id: 0,
    name: "",
    bio:"",
    image:"",
    artists: artists,
    stages: stages,
    performances: performances.performances,
};

export default initial;