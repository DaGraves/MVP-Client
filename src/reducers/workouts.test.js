import workoutsReducer from './workouts';
import { deleteWorkout, 
         getWorkouts,
         addWorkout
       } from './workouts';

describe('workoutReducer', () => {

    const workout = {
        workoutName: 'test',
        date: '07/12/2018',
        exerciseTime: '30',
        exerciseType: 'Running',
        notes: 'testNotes',
        caloriesBurned: '342', 
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = workoutsReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            workouts: [{
                name: null,
                date: null,
                exerciseTime: null,
                exerciseType: null,
                notes: null,
                caloriesBurned: null,
            }]
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = workoutsReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

});