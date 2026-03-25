let age = 18;
let name = age > 10 ? "Anushk" : "Jack"


const component = () => {

    return age > 10 ?<div>

        Anushk
    </div>
        :
<div>
    Jack
</div>

}


const person = {
    name: "Jack",
    age: 5,
    isMarried: false,
}

const name = person.name
const age = person.age
const isMarried = person.isMarried


const {name , age , isMarried} = person;


const person2 = {
    ...person, name : "Jack"
}
// ... using this when copying same objects but slight changes