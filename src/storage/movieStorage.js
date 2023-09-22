export const saveToLocalStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const loadFromLocalStorage = (key) => {
	const storedData = localStorage.getItem(key);
	if (storedData !== null) {
		return JSON.parse(storedData);
	}
	return null;
};

export const clearLocalStorage = (key) => {
	localStorage.removeItem(key);
};
