

// const foo = {
//     name: 'bob',
//     eat: function (fruit: string) {
//         console.log(`eat ${fruit}`);     
//     }
// }
// foo.eat('apple')


function foo(this: {name: string}) {
    console.log(this);
}
foo.call({name: 'bob'})

export {}