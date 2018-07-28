import { map, filter, reject, isNil } from 'ramda'

// Note only the second object has a 'contact' structure
const heroes = [
    { name: 'Superman' },
    { name: 'Batman', contact: { firstName: 'Bruce' } }
]

// Ramda functions curry by default, and so, perfectly matches
// the pipeline style.
console.log(
    [1, 2, 3]
    |> map(_ => _ * 2)
    |> filter(_ => _ > 4)
    |> map(_ => _ * 4)
)

// The optional chaining operator ('?') tucked onto properties will
// make chaining access not explode, and will carry on an 'undefined'
// value if one is found, up to the last property access.
//
// This makes it easy to perform the same operation without any logic, and
// finally just reject bad input
console.log(heroes
    |> map(x => x.contact ?.firstName)
    |> reject(isNil))

// The nullish coalescing operator ('??') lets you provide a default value
// if left-hand is nullish (undefined, null, etc.) and so the compared to the previous example
// will never return undefined values.
console.log(heroes
    |> map(x => x.contact ?.firstName ?? 'X Marks The Spot')
    |> reject(isNil))

// Lastly the logical assignment operator ('||=', '&&=', inspired by Ruby) sprinkles a little
// syntax sugar to when you want default values quickly.
const villain = 'Joker'
let hero = null
hero ||= villain
console.log(hero)
