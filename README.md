#### My comments on the task

The task was pretty complex for me, taking into consideration I have no experience with redux.

Problems on the way:
- Installation: It turned out, my node version was too high for this project, so I had to downgrade it using nvm. I have used nvm before, but never came acroos too high version problem - something new!
- Codebase acclimatization: No typescript, wow! :D I started with App.js and looked through each file to understand how the project is running. Also I googled redux-form and walked through the docs to make it clear for me.
- Quick fix: I noticed right away there was some error in the console about types in DatePicker, so I fixed it.
- Tasks: Validation implementation wasn't too complex task, except one thing. When I needed to check whether two reservations on same day collide, I noticed some problems with Dates comparison. After copying logged date objects, it turned out two same times vary with milliseconds difference. I took good time parsing the dates using wrapper (UTCDatePicker.tsx). Also it fixed UTC and local times differences (https://github.com/JohnStarich/sage/blob/b422b0ccef05fffe29143f335017ad2fc24f76fc/web/src/UTCDatePicker.js)
I decided react-router would be just fine for routing. I implemented it with simple navigation. Unfortunately, my clock runs out and I have no more time today - so I have to leave it right here. Since I have no experience with redux also, it would take me quite a while to implement the rest of the task.

I regret I didn't start with this exercise, so I would finish it earlier and left the easier ones undone (javascript ones).

# Washing Machine manager

Create an application that allows to book washing machine reservations.

It has simple form that allows you to enter the times of reservations per week days. 

You start with one week view that will represent current week's reservations.

#### Libraries used 
- redux and react-redux
- redux-form
- redux-datapicker
- reactstrap (react bootstrap library)
- lodash, scss and moment.js
 
During the assignment you can add any package you wish.

To run your project you must run:

`yarn && yarn start`

or corresponding `npm` commands

you can reach server at `localhost:3000`

## To finish your MVP you need to achieve those points:

### 1. Add validation of reservations that will check

- if both `start` and `end` is present and set (will show under start/end input - 'Can not be empty')
- if `end` time is after `start` (will show under end input - 'End time should be after start time')
  
  #### If all of the above pass you need to check:
  
- if two reservations on same day do not collide (show this under day's name - 'Conflict between two reservations')

in `src/components/Reservations.jsx` you will see how to setup proper validation errors in both cases

#### Hints

`moment.js` is great library that provide some nice tools to operate with times/dates. Methods that you can help you are `isAfter`, `isBetween`, `add(15, 'minutes')`. Remember - take care of good time parsing (take care of UTC problems if there will be any).

---

### 2. You need to add additional store for users

- add some router to the project and add additional route for users - eg. /users
- add some navigation buttons - use you good taste to style it
- create store for users
- create simple form for adding users - each has first name, last name, room number
- show a list of users and add some functionalities to remove them from the store
- configure proper action creators and reducers
- list and form can be on one view

---

### BONUS assignment. Connect users store with reservation form

- In the reservation form add new input in a single reservation entry. 
- It should be selected with the list of all the users. Make this value required in validation - because you need to know who made the reservation.

---

You can change whatever file you want, introduce new libraries to the project, and so on...

Good luck!
