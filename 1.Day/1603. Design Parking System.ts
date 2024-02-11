class ParkingSystem {
    
    private Big:number;
    private Medium:number;
    private Small:number

    constructor(big: number, medium: number, small: number) {
     this.Big=big;
     this.Medium=medium;
     this.Small=small   
    }
    
    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                if (this.Big > 0) {
                    this.Big--
                    return true
                } else {
                    return false
                }
            case 2:
                if (this.Medium > 0) {
                    this.Medium--
                    return true
                } else {
                    return false
                }
            case 3:
                if (this.Small > 0) {
                    this.Small--
                    return true
                } else {
                    return false
                }
        
            default:
                break;
        }
        return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */