package validator

import (
	"net"
	"strings"
)

func ValidDomain(domain string) bool {
	mxRecords, err := net.LookupMX(domain)

	if err != nil {
		return false
	}
	return len(mxRecords) > 0
}

func GetDomain(email string) string {
	parts := strings.Split(email, "@")
	if len(parts) != 2 {
		return ""
	}
	return parts[1]
}
