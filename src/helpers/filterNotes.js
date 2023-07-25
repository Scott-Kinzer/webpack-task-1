export const filterNotes = (notesCopy) => {
    return notesCopy.reduce((acc, item) => {
        if (item.isArchive) {
            return {
                ...acc,
                [item.category]: {
                    ...acc[item.category],
                    archive: acc[item.category]?.archive ? acc[item.category]?.archive + 1 : 1,
                }
            }
        } else {
            // Active
            return {
                ...acc,
                [item.category]: {
                    ...acc[item.category],
                    active: acc[item.category]?.active ? acc[item.category]?.active + 1 : 1,
                }
            }
        }

    }, {});
};