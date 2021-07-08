const persons = [
    {
      name: "Andy",
      friendsQty: 10,
      index: 1
    },
    {
      name: "Mike",
      friendsQty: 5,
      index: 2
    },
    {
      name: "Sophia",
      friendsQty: 10,
      index: 3
    },
    {
      name: "Joshua",
      friendsQty: 3,
      index: 4
    },
    {
      name: "John",
      friendsQty: 10,
      index: 5
    },
    {
      name: "Gabriella",
      friendsQty: 8,
      index: 6
    },
    {
      name: "Tyler",
      friendsQty: 7,
      index: 7
    },
    {
      name: "Dylan",
      friendsQty: 2,
      index: 8
    },
    {
      name: "Sarah",
      friendsQty: 5,
      index: 9
    },
    {
      name: "Alexa",
      friendsQty: 10,
      index: 10
    },
    {
      name: "Henry",
      friendsQty: 10,
      index: 11
    },
    {
      name: "Arianna",
      friendsQty: 10,
      index: 12
    }
  ];
  

 const sortPersonsByFriendsQty= persons => {
     return persons.sort((a,b)=> a.friendsQty-b.friendsQty);
 }
  
  sortPersonsByFriendsQty(persons);
  
  console.log(persons);
  
  