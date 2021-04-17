

const list = [
    { 
        firstName: 'Jasmine',
        lastName: 'Ennabe',
        handle: '@jasmineennabe',
        pic: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
        password: 'mysecretpassword',
    },
    { 
        firstName: 'John',
        lastName: 'Doe',
        handle: '@johndoe',
        pic: "https://randomuser.me/api/portraits/men/32.jpg",
        password: 'imjohndoe',
    },
    { 
        firstName: 'Jane',
        lastName: 'Doe',
        handle: '@janedoe',
        pic: "https://randomuser.me/api/portraits/women/67.jpg",
        password: 'imjanedoe',
    },
    { 
        firstName: 'Jack',
        lastName: 'Doe',
        handle: '@jackdoe',
        pic: "https://randomuser.me/api/portraits/men/1.jpg",
        password: 'imjackdoe',
    },
];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle ), password: undefined }) ;
module.exports.Add = (user)=> {
    if(!user.firstName){
        throw "First Name is reqired"
    }
     list.push(user);
     return { ...user, password: undefined };
}
module.exports.Update = (user_id, user)=> {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lastName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    //list[user_id] = newObj ;
    return { ...oldObj, password: undefined };
}
module.exports.Delete = (user_id)=> {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}