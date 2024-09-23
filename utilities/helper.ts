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

export function caesarCipherEncode(text: string, shift: number): string {
    return text
        .split("")
        .map((char) => shiftChar(char, shift))
        .join("");
}

export const caesarCipherDecode = (text: string, shift: number): string => {
    return text
        .split("")
        .map((char) => shiftChar(char, -shift))
        .join("");
};

const shiftChar = (char: string, shift: number): string => {
    const charCode = char.charCodeAt(0);

    // Uppercase A-Z
    if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(
            ((((charCode - 65 + shift) % 26) + 26) % 26) + 65
        );
    }
    // Lowercase a-z
    if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(
            ((((charCode - 97 + shift) % 26) + 26) % 26) + 97
        );
    }

    // Return the character unchanged if it's not a letter
    return char;
};

export const buildImageUrl = (path: string) => {
    const config = useRuntimeConfig();
    return `${config.public.baseURL}${path}`;
};
