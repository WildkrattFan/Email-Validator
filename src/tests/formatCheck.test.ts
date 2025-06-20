import {expect, test} from "vitest"

import { verifyFormat } from "../utils/checkFormat"



//Tests that are expected to be true single email
test("valid email format returns true", () =>{
    expect(verifyFormat("testEmail@gmail.com")).toBe(true)
})


test("valid email format w/ special chars returns true", () =>{
    expect(verifyFormat("testEmail.-_+213@gmail.com")).toBe(true)
})

test("address with non .com ends still return true", () =>{
    expect(verifyFormat("foo@gmail.com")).toBe(true)
})


//Tests that are expected to be false single email
test("too short email address returns false", () =>{
    expect(verifyFormat("a@b.c")).toBe(false)
})

test("address with no domain returns false", () =>{
    expect(verifyFormat("test")).toBe(false)
})

test("address with only domain returns false", () =>{
    expect(verifyFormat("@gmail.com")).toBe(false)
})

test("address with no @ returns false", () =>{
    expect(verifyFormat("foogmail.com")).toBe(false)
})

test("nonexistent address returns false", () =>{
    expect(verifyFormat("")).toBe(false)
})

