const users = [
    { name: "Peter", email: "Peter@test.com", age: 26, },
    { name: "Mary", email: "MJ@test.com", age: 23, },
    { name: "Shrek", email: "green@test.com", age: 37, },
]

for (const {name, email, age } of users) {
    console.log(`User name: ${name}\n Email: ${email}\n User age: ${age}\n --------------`)
}