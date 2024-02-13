function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let employeeCount = 0
    for (const hour of hours)
        if (hour >= target)
            employeeCount++


    return employeeCount
};