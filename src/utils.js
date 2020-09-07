import product1 from './assets/Premier_Cropped_Skinny_Jean_13_8d64f29d-9ef1-4cb1-9fa6-6193c913ccd0_100x.jpg'
import product2 from './assets/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_100x.jpg'
import product3 from './assets/Relaxed-Fit_Cotton_Shirt_1_cb5951bf-ef65-4d30-84f4-f42135a58f69_100x.jpg'
import product4 from './assets/Tailored_Fit_Mesh-Panel_Polo_4_fba54f8e-368e-4537-92ff-03fef8a6c09c_100x.jpg'
import product5 from './assets/Relaxed-Fit_Cotton_Shirt_4_211x.jpg'
import product6 from './assets/Faxon_Chambray_Low-Top_Sneaker_Featured_211x.jpg'
import product7 from './assets/Viscose-Cashmere_Scarf_4_211x.jpg'
import product8 from './assets/Ocean-Wash_Linen_Sport_Shirt_bf3d7287-c8bf-458e-bd19-8d583a4760d6_150x.jpg'

import collection1 from './assets/demo01_10_423x.jpg'
import collection2 from './assets/demo01_11_423x.png'
import collection3 from './assets/demo01_09_423x.jpg'


import blog1 from './assets/bl_07_380x.jpg'
import blog2 from './assets/bl_12_380x.jpg'
import blog3 from './assets/bl_08_380x.jpg'

import insta_1 from './assets/insta-1.jpg'
import insta_2 from './assets/insta-2.jpg'
import insta_3 from './assets/insta-3.jpg'
import insta_4 from './assets/insta-4.jpg'
import insta_5 from './assets/insta-5.jpg'
import insta_6 from './assets/insta-6.jpg'


import avatar from './assets/avatar.jpg'



export const assets = {
    product: [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8
    ],
    collection: [
        collection1,
        collection2,
        collection3
    ],
    blog: [
        blog1,
        blog2,
        blog3
    ],
    insta: [
        insta_1,
        insta_2,
        insta_3,
        insta_4,
        insta_5,
        insta_6
    ],
    avatar: [avatar]

}


export const EventEmmiter = {
    events: {},
    dispatch: function (event, data) {
        if (!this.events[event]) return;
        this.events[event].forEach(callback => callback(data))
    },
    subscribe: function (event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
}


export const routes = {
    DASHBOARD: 'DASHBOARD',
    CREATE_PRODUCT: 'CREATE_PRODUCT',
    VIEW_PRODUCTS: 'VIEW_PRODUCTS',
    EDIT_PRODUCT: 'EDIT_PRODUCT',
    PROFILE: 'PROFILE',
    MAKE_MODARATOR: 'MAKE_MODARATOR',
    ADMIN_LIST: 'ADMIN_LIST'
}


export const catchAsync = (fn, errBackup) => {
    return (...params) => {
        return fn(...params).then((res) => res).catch(err => {console.log(err) })
    }
}

export const checkStatus = (res) => {
    if (!res) return false;
    return res.data.status === 'success'
}

export const extractFilter = (primaryObject, substractObject) => {
    const obj1 = { ...primaryObject }
    const obj2 = {...substractObject}

    Object.keys(obj1).map(key => {
        if (obj1[key] === obj2[key]) {
            delete obj1[key]
        }
    });

    return obj1
}

// class Filter {
//     constructor(primaryObject, secondaryObject) {
//         this.primaryObject = primaryObject,
//             this.secondaryObject = secondaryObject
//     }
//     substract() {
//         const obj1 = { ...this.primaryObject }
//         const obj2 = { ...this.secondaryObject }

//         Object.keys(obj1).map(key => {
//             if (obj1[key] === obj2[key]) {
//                 delete obj1[key]
//             }
//         });

//         this.primaryObject = obj1

//         return this
//     }
// }