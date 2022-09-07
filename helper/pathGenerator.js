export const tabsPath = (route) => {
    const tabsPath = (route.split('/'))
    if (tabsPath.length > 1) {
        return tabsPath[2]
    }
    return tabsPath[1]
}

export const sectionPath = (route) => {
    const tabsPath = (route.split('/'))
    if (tabsPath.length > 2) {
        // convert first letter to upper case
        const firstLetterUpper = tabsPath[3].charAt(0).toUpperCase() + tabsPath[3].slice(1)
        return firstLetterUpper;
    }
    return null
}