function linearSearch(list, item) {
    for (let i = 0 ; i < list.length; i += 1) {
        if (item === list[i]) {
            return true;
        }
    }

    return false;
}

linearSearch([2,6,7,90,103], 90)