
export function add(a: number, b: number): number {
    return a + b
}

export function square(a: number): number {
    return a * a
}

type user = {firstname: string, lastname: string, age: number}
export function setName(user: user, fullname: string): user {
    let names = fullname.split(' ')

    user.firstname = names[0]
    user.lastname = names[1]

    return user
}