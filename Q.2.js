let notifications = [
    {message: "Lorem", read: true},
    {message: "Ipsum", read: true},
    {message: "Dolor", read: true},
    {message: "Sit", read: false},
    {message: "Amet", read: true}
];

let allRead = true;

allRead = !notifications.some(({ read }) => read === false);  // negating the returned boolean value as it returns true once the condition is met.

console.log(allRead);