function slugify(string) {
    return string
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/&/g, '-and-') // replace & with 'and'
        .replace(/[\s\W-]+/g, '-'); // replace spaces, non-word characters and dashes with a single dash (-)
}

function toReadableDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
}

export { slugify, toReadableDate };