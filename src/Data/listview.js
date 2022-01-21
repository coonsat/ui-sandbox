const list = [
    {
        firstName: "Stephen",
        lastName: "Maloney",
        country: "Germany",
        postcode: "37840",
        phone: "+4912347895",
        DOB: new Date()
    },
    {
        firstName: "Barry",
        lastName: "Maloney",
        country: "Italy",
        postcode: "37840",
        phone: "+4912347895",
        DOB: new Date()
    },
    {
        firstName: "Monroe",
        lastName: "Maloney",
        country: "Moldova",
        postcode: "37840",
        phone: "+4912347895",
        DOB: new Date() 
    },    
    {
        firstName: "Thomas",
        lastName: "Maloney",
        country: "Albania",
        postcode: "37840",
        phone: "+4912347895",
        DOB: new Date()
    }
]

export const formattedList = list.map(item => {
    return ({
        name: `${item.firstName} ${item.lastName}`,
        email: `${item.firstName.toLowerCase()}.${item.lastName.toLowerCase()}@mockuser.com`,
        country: item.country,
        postcode: item.postcode,
        phone: item.phone,
        DOB: item.DOB
    })
});