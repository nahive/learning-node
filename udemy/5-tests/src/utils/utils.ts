
export function add(a: number, b: number): number {
    return a + b
}

export function asyncAdd(a: number, b: number, callback: (result: number) => void) {
    setTimeout(() => {
        callback(a + b)
    }, 50)
}

export function square(a: number): number {
    return a * a
}

export function asyncSquare(a: number, callback: (result: number) => void) {
    setTimeout(() => {
        callback(a * a)
    }, 50)
}

type user = {firstname: string, lastname: string, age: number}
export function setName(user: user, fullname: string): user {
    let names = fullname.split(' ')

    user.firstname = names[0]
    user.lastname = names[1]

    return user
}