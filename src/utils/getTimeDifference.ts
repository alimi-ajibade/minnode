import {
    differenceInSeconds,
    differenceInMinutes,
    differenceInHours,
    differenceInDays,
    differenceInYears,
    format,
} from "date-fns";

const getTimeDiff = (last_modified: string) => {
    const diffSeconds = differenceInSeconds(Date.now(), last_modified);
    const diffMinutes = differenceInMinutes(Date.now(), last_modified);
    const diffHours = differenceInHours(Date.now(), last_modified);
    const diffDays = differenceInDays(Date.now(), last_modified);
    const diffYear = differenceInYears(Date.now(), last_modified);

    if (diffYear > 0) return format(new Date(last_modified), "MMM dd yyyy");
    if (diffDays > 0) return format(new Date(last_modified), "MMM dd");
    if (diffHours > 0) return `${diffHours} hour(s) ago`;
    if (diffMinutes > 0) return `${diffMinutes} minute(s) ago`;
    if (diffSeconds > 0) return `${diffSeconds} second(s) ago`;
};

export default getTimeDiff;
