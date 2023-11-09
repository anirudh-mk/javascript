const o = Object()
o.firstName = 'anirudh'
o.lastName = 'mk'
o.greet = function(){
    console.log('hello');
}

const o2 = {}
o2.firstName = 'anirudh'
o2['last name'] = 'mk'
const val = 'teaching'
o2[val] = function(){
    console.log('hello');
}

const o3 = {
    firstName:'anirudh',
    lastName:'mk',
    greet: function(){
        console.log('hello');
    },
    address:{
        street:'india'
    }
}