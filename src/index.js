module.exports = function toReadable (number) {
  const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const firstDecade = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const otherDecade = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 10) {
        return singleDigits[number];
    } else if (number < 20) {
        return firstDecade[number-10];
    } else if (number < 100) {
        num = number.toString().split('');
        if (num[1] === '0') {
            return `${otherDecade[num[0]-1]}`;
        }
        return `${otherDecade[num[0]-1]} ${singleDigits[num[1]]}`;
    } else if (number < 1000) {
        num = number.toString().split('');
        if (num[1] === '0' && num[2] === '0') {
            return `${singleDigits[num[0]]} hundred`;
        } else if (num[1] === '0') {
            return `${singleDigits[num[0]]} hundred ${singleDigits[num[2]]}`;
        } else if (num[2] === '0') {
            return `${singleDigits[num[0]]} hundred ${otherDecade[num[1]-1]}`;
        } else if (num[1] === '1') {
            return `${singleDigits[num[0]]} hundred ${firstDecade[num[2]]}`;
        }

        return `${singleDigits[num[0]]} hundred ${otherDecade[num[1]-1]} ${singleDigits[num[2]]}`;
    }

}
