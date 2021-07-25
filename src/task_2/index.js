/** Задача 2 - Форматтер для ФИО
Требуется написать функцию fioFormat, которая
принимает строку, в которой через пробел написаны три слова: имя, фамилия и отчество,
требуется вернуть новую строку формата Фамилия И.О. где И - имя и О - отчество
@param {string} inputFio - Строка с именем, фамилией и отчеством
@return {string} Строка формата Фамилия И.О.
 */
function fioFormat(inputFio) {
    if (typeof inputFio == "string") {
        let arrStr = inputFio.split(' ')
        arrStr[0] = `${arrStr[0].substr(0, 1)}.`
        arrStr[2] = `${arrStr[2].substr(0, 1)}.`
        let str = `${arrStr[1]} ${arrStr[0]} ${arrStr[2]}`
        return str
    }
}

module.exports.fioFormat = fioFormat;
