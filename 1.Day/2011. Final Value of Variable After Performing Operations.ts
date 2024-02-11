function finalValueAfterOperations(operations: string[]): number {
    let result: number = 0;
    operations.forEach(operation => {
        switch (operation) {
            case '++X':
            case 'X++':
                result += 1;
                break;
            case '--X':
            case 'X--':
                result -= 1;
                break;
            default:
                break;
        }
    });
    return result;
}
