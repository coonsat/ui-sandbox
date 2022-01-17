const list = [
    {
        firstName: "Stephen",
        lastName: "Maloney" 
    },
    {
        firstName: "Barry",
        lastName: "Maloney" 
    },
    {
        firstName: "Monroe",
        lastName: "Maloney" 
    },    {
        firstName: "Thomas",
        lastName: "Maloney" 
    }
]

export const formattedList = list.map(item => {
    return ({
        name: `${item.firstName} ${item.lastName}`,
        email: `${item.firstName.toLowerCase()}.${item.lastName.toLowerCase()}@mockuser.com`
    })
});