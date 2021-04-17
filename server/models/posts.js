

const users = require("./users");

const list = [
    {
        src: "https://i2.wp.com/news.minneapolismn.gov/wp-content/uploads/2018/08/KittenFluffs4.jpg",
        alt: "Placeholder image",
        caption: "I love kittens!",
        time: Date(),
        user_handle: "@jasmineennabe",
        isPublic: true,
    },
    {
        src: "https://www.irreverentgent.com/wp-content/uploads/2016/04/How-to-Workout-Plan-banner-new-1024x683.jpg",
        alt: "Placeholder image",
        caption: "No caption",
        time: Date(),
        user_handle: "@johndoe",
        isPublic: true,
    },
    {
    src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/download-3-1585685825.jpeg",
        alt: "Placeholder image",
        caption: "Got my nails done :)",
        time: Date(),
        user_handle: "@janedoe",
        isPublic: true,
    },
    {
    src: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440",
        alt: "Placeholder image",
        caption: "Look at my happy guy",
        time: Date(),
        user_handle: "@jackdoe",
        isPublic: true,
    },
];

    const listWithOwner = ()=> list.map((x, i) => ({ 
        ...x, 
        user: users.GetByHandle(x.user_handle) 
    }) );
    
    module.exports.GetAll = ()=> {
        return listWithOwner();
    }

    module.exports.GetWall = (handle)=> {
        return listWithOwner().filter(post=> post.user_handle == handle);
    };

    module.exports.GetFeed = (handle)=> listWithOwner()
        .filter(post=> users.GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );

    module.exports.Get = (post_id)=> list[post_id];

    module.exports.Add = (post)=> {
        if(!post.user_handle){
            throw {code: 422, msg: "Post must have an Owner"}
        }
        list.push(post);
        return { ...post };
    }

    module.exports.Update = (post_id, post)=> {
        const oldObj = list[post_id];
        const newObj = { ...oldObj, ...post }
        list[post_id] = newObj ;
        return newObj;
    }

    module.exports.Delete = (post_id)=> {
        const post = list[post_id];
        list.splice(post_id, 1);
        return post;
    } 