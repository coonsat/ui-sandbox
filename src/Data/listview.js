const list = [
    {
        firstName: "Stephen",
        lastName: "Maloney" 
    }
]

export const formatedList = list.map(item => {
    return {
        name: `${item.firstName} ${itemlastName}`,
        email: `${toLowerCase(item.firstName)}.${toLowerCase(item.lastName)}@mockuser.com`
    }
});