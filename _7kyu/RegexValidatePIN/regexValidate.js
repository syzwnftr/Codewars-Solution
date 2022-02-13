const validatePIN = (pin) => {
	if((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin)) {
		return true;
	} else {
		return false;
	}
};


// Simplified version
function validatePIN2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}