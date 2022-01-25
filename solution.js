findEmployeeByName = (searchVal, arr) => {
    for(let i = 0; i < arr.length; i++) {
        let employeeObj = arr[i]; 
        if(searchVal === employeeObj.name) return employeeObj;
    }
}

findManagerFor = (employeeObj, arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(employeeObj.managerID === arr[i].id) return arr[i];
    }
}

findCoworkersFor = (employeeObj, arr) => {
    let coworkers = [];

    for(let i = 0; i < arr.length; i++) {
        if(employeeObj.managerID === arr[i].managerId && employeeObj.name !== arr[i].name) {
            coworkers.push(arr[i]);
            }
    }
    return coworkers; 
}

findManagementChain = (employeeObj, arr) => {
    let allManagers = [];

    const eachManager = () => {
        let manager = findManagerFor(employeeObj, arr)
        allManagers.push(manager);
        if(manager.managerID) eachManager(manager, arr);
    } 
    return allManagers; 
}

generateManagementTree = (arr) => { 

}
//