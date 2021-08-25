// Re-usable reducer object
export const updateObject = (oldObject, updatedProperties) => {
    return { 
        ...oldObject,
        ...updatedProperties
    }
}