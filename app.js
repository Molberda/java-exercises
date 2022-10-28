async function postsByUser(uid){
const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
const result = await promise.json()
const posts = result.filter(elem => elem.userId === uid)
console.log(posts)
}

postsByUser(4)