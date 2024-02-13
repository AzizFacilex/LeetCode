function interpret(command: string): string {
    var result:string=''
    for (let index = 0; index < command.length; index++) {
        const element = command[index];
        if (element==='G')
            result += 'G'
        if (element==='(') {
            if (index < command.length && command[index+1] ==='a') {
                result += 'al'
                index++
            }
            else
                result += 'o'
        }
    }
    return result
};