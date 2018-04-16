import * as db from './db'

export function handleSignup(email: string, password: string) {
    // check if email exists
    db.save({email, password})
    // send the welcome email
}