import {expect, test} from "vitest"

import { checkMXRecords } from "../utils/MXCheck"

//Valid emails resolve true
test("valid gmail resolves true", () =>{
    console.log()
    expect(checkMXRecords("superuser@gmail.com")).resolves.toMatchObject({
        success: true,
        result: {

        }
    })
})

test("valid misc address resolves true", () =>{
    console.log()
    expect(checkMXRecords("foo@linkedin.com")).resolves.toMatchObject({
        success: true,
        result: {

        }
    })
})
test("valid misc address resolves true 2", () =>{
    console.log()
    expect(checkMXRecords("donotreply@match.indeed.com")).resolves.toMatchObject({
        success: true,
        result: {

        }
    })
})

//invalid email addresses errors
test("invalid gmail resolves false", () =>{
    console.log()
    expect(checkMXRecords("superuser@gmfafil.com")).rejects.toThrowError("An error occured during DNS lookup.")
})

test("invalid email resolves false 2", () =>{
    console.log()
    expect(checkMXRecords("superuser@bfdac2m.com")).rejects.toThrowError("An error occured during DNS lookup.")
})