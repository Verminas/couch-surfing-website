// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
// : number
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var isOpen;
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? '&star;' : '';
    reviewTotalDisplay.innerHTML = 'review total '
        + value.toString()
        + '| last reviewed by '
        + reviewer
        + " "
        + iconDisplay;
}
showReviewTotal(reviews.length, reviews[reviews.length - 1].name, reviews[reviews.length - 1].loyaltyUser);
var you = {
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName.firstName);
