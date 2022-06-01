import { DISHES } from "../shared/dishes";

export const Dishes = (state = DISHES, action) =>{
    switch (action.type) {
        case '':
            break;
    
        default:
            return state;
    }
}