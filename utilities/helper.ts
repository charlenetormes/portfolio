import moment from "moment";

export const capitalizeFirstLetter = (word: string): string => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const getMonthsAgo = (date: Date): string => {
    const today = moment();
    const givenDate = moment(date);

    // Calculate the total difference in months
    const months = today.diff(givenDate, "months");

    // Ensure no negative or zero months and return the result
    if (months <= 0) return "Created just now";

    return `Created ${months} month${months > 1 ? "s" : ""} ago`;
};
