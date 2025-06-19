package validator

var doNotEmailList = map[string]bool{
	"example@example.com": true,
	"test@test.com":       true,
	"admin@admin.com":     true,
}

func IsEmailInDoNotEmailList(email string) bool {
	_, exists := doNotEmailList[email]
	return exists
}
