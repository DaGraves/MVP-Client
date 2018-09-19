import {ADD_WORKOUT, GET_WORKOUTS, DELETE_WORKOUT} from '../actions/workouts';

const initialState = {
    workouts: [{
        name: null,
        date: null,
        exerciseTime: null,
        exerciseType: null,
        notes: null,
        caloriesBurned: null,
    }]
};

export default function reducer(state = initialState, action) {
    if (action.type === ADD_WORKOUT) {
        return Object.assign({}, state, {
            workouts: [...state.workouts, {
                name: action.name,
                date: action.date,
                exerciseTime: action.exerciseTime,
                exerciseType: action.exerciseType,
                notes: action.notes,
                caloriesBurned: action.caloriesBurned
            }]
        });
    }
    else if(action.type === GET_WORKOUTS) {
        return Object.assign({}, state, {
                workouts: action.workouts.workouts
        })
    }
    else if(action.type === DELETE_WORKOUT) {
        return 'STATE';
    }
    return state;
}