module.exports = {
    // entry: './test.js'  //Точка входа, если требуется изменить исполняемый js файл
    devServer: {
        contentBase: './dist', //Директория расположения контента
        overlay: true //Для вывода ошибок в консоль
    }
}