function maximumWealth(accounts: number[][]): number {
    var maxWealth:number = 0;
    accounts.forEach(customer => {
        let wealth = customer.reduce((acc, curr) => acc + curr, 0) 
        if (wealth > maxWealth) {
            maxWealth = wealth
        }
    })
    return maxWealth
};