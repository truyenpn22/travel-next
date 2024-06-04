const getFromLocalStorage = (key: string) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
};

const setToLocalStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error(error);
    }
};

const removeFromLocalStorage = (key: string) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(error);
    }
};

const LocalStorage = {
    getFromLocalStorage, setToLocalStorage, removeFromLocalStorage
}

export default LocalStorage


