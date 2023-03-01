import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss'],
})
export class StringComponent {
  description =
    'O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos.' +
    'Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas' +
    'simples ( ' +
    "' " +
    " '" +
    ' ) e template literals ou template strings ( ), template literals' +
    'permitem textos multilinhas e expressões de linguagem com os caracteres ${ },' +
    'por exemplo: console.log(A soma de duas unidades é ${1 + 1}), já as outras não,' +
    'por exemplo: console.log("Isso é um texto").';
}