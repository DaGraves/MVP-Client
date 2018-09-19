import {DELETE_WORKOUT, deleteWorkout, 
        GET_WORKOUTS, getWorkouts,
        ADD_WORKOUT, addWorkout
       } from './workouts';
describe('deleteWorkout', () => {
    it('Should return the action', () => {
        const id = 'testID';
        const action = deleteWorkout(id);
        expect(action.type).toEqual(DELETE_WORKOUT);
        expect(action.id).toEqual(id);
    });
});

describe('getWorkouts', () => {
    it('Should return the action', () => {
        const workouts = 'workouts';
        const action = getWorkouts(workouts);
        expect(action.type).toEqual(GET_WORKOUTS);
        expect(action.workouts).toEqual(workouts);
    });
});

describe('addWorkout', () => {
    it('Should return the action', () => {
        const workout = {
            workoutName: 'testName',
            date: '07/12/2018',
            exerciseTime: '30',
            exerciseType: 'running',
            notes: 'testNotes',
            caloriesBurned: '345'
        };
        const action = addWorkout(workout);
        expect(action.type).toEqual(ADD_WORKOUT);
        expect(action.name).toEqual(workout.workoutName);
        expect(action.date).toEqual(workout.date);
        expect(action.exerciseTime).toEqual(workout.exerciseTime);
        expect(action.exerciseType).toEqual(workout.exerciseType);
        expect(action.notes).toEqual(workout.notes);
        expect(action.caloriesBurned).toEqual(workout.caloriesBurned);
    });
});