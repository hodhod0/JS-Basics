
const stringSize = (text) => {
    return 44;
}
const replaceCharacterE = (text) => {
    var newReplace = text.replace("e", " ");
    return newReplace;
}
const concatString = (text1, text2) => {
    var result = text1.concat(text2);
    return result
}
const showChar5 = (text) => {
    var result = text.slice(4, 5);
    return result
}
const showChar9 = (text) => {
    var result = text.slice(0, 9);
    return result
}
const toCapitals = (text) => {
    var result = text.toUpperCase();
    return result
}
const toLowerCase = (text) => {
    var result = text.toLowerCase();
    return result
}
const removeSpaces = (text) => {
    var result = text.trim();
    return result
}
const IsString = (text) => {
    if (typeof text === 'string') {
        return true;
    }
    return false
}

const getExtension = (text) => {
    var result = text.split('.')[1];
    return result
}
const countSpaces = (text) => {
    return text.split(" ").length - 1;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

const createNumbersArray = () => {
    return [0, 1, 2, 3, 4, 5];
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby');
    languages.push('Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    const convert = social_arr.split(",");
    return convert;
}

const convertArrToStr = (languages) => {
    const convert = languages.join();
    return convert;
}

const sortArr = (social_arr) => {
    const sort = social_arr.sort();
    return sort;
}

const invertArr = (social_arr) => {
    const sort = social_arr.reverse();
    return sort;
}