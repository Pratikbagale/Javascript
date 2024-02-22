// The switch statement evaluates an expression, matching the expression's value against a 
//series of case clauses, and executes statements after the first case clause with a matching value,
// until a break statement is encountered. The default clause of a switch statement will be jumped
// to if no case matches the expression's value.

let fruits = 'Papayas';
const expr = 'Papayas';

switch (expr) {
    case 'Oranges':
        console.log('Oranges are 80 Rs per kg');
        break;

    case 'Mangoes':
        console.log('Mangoes are 150 Rs per kg');
        break;

    case 'Papayas':
        console.log('Papayas are 40 Rs per one whole Papaya');
        break;

    default:
        console.log(`Sorry, we are out of ${fruits}.`);
}

