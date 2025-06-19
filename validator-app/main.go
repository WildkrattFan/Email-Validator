package main

import (
	"validator"
)

func checkEmail(email string) bool {
	if !validator.IsValidEmailFormat(email) {
		return false
	}

	domain := validator.GetDomain(email)
	if domain == "" || !validator.ValidDomain(domain) {
		return false
	}

	if validator.IsEmailInDoNotEmailList(email) {
		return false
	}

	return true
}

func main() {
	// Example usage
	emails := []string{
		"test@example.com",
		"invalid-email",
		"admin@admin.com",
	}

	for _, email := range emails {
		if checkEmail(email) {
			println(email + " is valid.")
		} else {
			println(email + " is invalid.")
		}
	}
}
