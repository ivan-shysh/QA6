/* Шаблоны регулярных выражений

/abc/	    Последовательность символов
/[abc]/	    Любой символ из данного набора
/[^abc]/	Любой символ, не входящий в данный набор
/[0-9]/	    Любой символ из диапазона
/x+/	    Одно или несколько вхождений символа
/x*/	    /* Ноль или более вхождений
/x?/	    Ноль или одно вхождение 
/x{2,4}/	От двух до четырех вхождений
/(abc)/	    группа
/a|b|c/	    Любой из нескольких шаблонов
/\d/ 	    соответствует любой цифре от 0 до 9 включительно, 
\D  	    не цифра
\w  	    соответствует буквам и цифрам
\W   	    не алфавитно-цифровой символ
/\s/ 	    любой пробельный символ
/\S/	    не пробельный символ
/./ 	    любой символ, кроме новой строки
/\b/ 	    граница слова
^   	    начало строки
$   	    конец строки
*/