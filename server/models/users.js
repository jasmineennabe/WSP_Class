

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [
    { 
        firstName: 'Jasmine',
        lastName: 'Ennabe',
        handle: '@jasmineennabe',
        pic: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
        password: 'mysecretpassword',
        isAdmin: true,
        following: [ { handle: '@johndoe', isApproved: true }, { handle: '@janedoe', isApproved: true }, { handle: '@jackdoe', isApproved: true } ],
    },
    { 
        firstName: 'John',
        lastName: 'Doe',
        handle: '@johndoe',
        pic: "https://randomuser.me/api/portraits/men/32.jpg",
        password: 'imjohndoe',
        isAdmin: false,
        following: [ { handle: '@jasmineennabe', isApproved: true }, { handle: '@janedoe', isApproved: true }, { handle: '@jackdoe', isApproved: true } ],
    },
    { 
        firstName: 'Jane',
        lastName: 'Doe',
        handle: '@janedoe',
        pic: "https://randomuser.me/api/portraits/women/67.jpg",
        password: 'imjanedoe',
        isAdmin: false,
        following: [ { handle: '@johndoe', isApproved: true }, { handle: '@jasmineennabe', isApproved: true }, { handle: '@jackdoe', isApproved: true } ],
    },
    { 
        firstName: 'Jack',
        lastName: 'Doe',
        handle: '@jackdoe',
        pic: "https://randomuser.me/api/portraits/men/1.jpg",
        password: 'imjackdoe',
        isAdmin: false,
        following: [ { handle: '@johndoe', isApproved: true }, { handle: '@janedoe', isApproved: true }, { handle: '@jasmineennabe', isApproved: true } ],
    },
];

    module.exports.GetAll = ()=> list;
    module.exports.Get = (user_id)=> list[user_id];
    module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle ), password: undefined }) ;
    module.exports.Add = (user)=> {
        if(!user.firstName){
            throw { code: 422, msg: "First Name is required" }
        }
        list.push(user);
        return { ...user, password: undefined };
    }
    module.exports.Register = async (user)=> {

        const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);

        user.password = hash;

        if(!user.firstName){
            throw { code: 422, msg: "First Name is required" }
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
    module.exports.Login = async (handle, password) =>{
        console.log({ handle, password})
        const user = list.find(x=> x.handle == handle);
        if(!user) throw { code: 401, msg: "Sorry there is no user with that username" };

        if( ! await bcrypt.compare(password, user.password) ){
            throw { code: 401, msg: "Wrong Password" };
        }

        const data = { ...user, password: undefined };

        const token = jwt.sign(data, JWT_SECRET)

        return { user: data, token };
    }
    module.exports.FromJWT = async (token) =>{
        try {
            const user = jwt.verify(token, JWT_SECRET);
            return user;       
        } catch (error) {
            console.log({error});
            return null;
        }
    }