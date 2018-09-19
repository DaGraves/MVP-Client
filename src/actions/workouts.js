import {API_BASE_URL} from '../config';

export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const deleteWorkout = (id) => ({
    type: DELETE_WORKOUT,
    id
});

export const GET_WORKOUTS = 'GET_WORKOUTS';
export const getWorkouts = (workouts) => ({
    type: GET_WORKOUTS,
    workouts
})

export const ADD_WORKOUT = 'ADD_WORKOUT';
export const addWorkout = (workout) => ({
    type: ADD_WORKOUT,
    name: workout.workoutName,
    date: workout.date,
    exerciseTime: workout.exerciseTime,
    exerciseType: workout.exerciseType,
    notes: workout.notes,
    caloriesBurned: workout.caloriesBurned
});

export const removeWorkout = (id) => (dispatch, getState) => {
    dispatch(deleteWorkout);
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/api/workouts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            return err
        })
    );
};

export const retrieveWorkouts = () => (dispatch, getState) => {
    dispatch(getWorkouts);
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/api/workouts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            return err
        })
    );
};

export const saveWorkout = (workout) => (dispatch, getState) => {
    dispatch(addWorkout(workout));
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/api/workouts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                name: workout.workoutName,
                date: workout.date,
                exerciseTime: workout.exerciseTime,
                exerciseType: workout.exerciseType,
                notes: workout.notes,
                caloriesBurned: workout.caloriesBurned
            })
        })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            return err;
        })
    );
};
