'use strict'

if (-1 || 0) alert( 'first' ); // Выполниться
if (-1 && 0) alert( 'second' ); // Не выполниться
if (null || -1 && 1) alert( 'third' ); // Выполниться

