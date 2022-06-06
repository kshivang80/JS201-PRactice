// LLD :- LOWER LEVEL SYSTEM
// HLD :- HIGH LEVEL DESIGN


//PARKING SYSTEM

class Vehicle {
    constructor(type,regNumber,color){
        this._type =type;
        this._regNumber =regNumber;
        this._color =color;

    }
    get type(){
        return this._type
    }
   set type(value){
       this._type=value
   }
}


//Car

class Car extends Vehicle{
    constructor(regNumber,color){
        super("car",regNumber,color)
    }
}

// let c1 =new Car("DL-1234","Red")

// color.log(c1)


//Bike

class Bike extends Vehicle{
    constructor(regNumber,color){
        super("Bike",regNumber,color)
    }
}


//Truck

class Truck extends Vehicle{
    constructor(regNumber,color){
        super("Truck",regNumber,color)
    }
}


//Parking spots

class Slot{
    constructor(type,number){
     this.number=number;
     this.type =type
     this._isBooked =false;

    }

    get isBooked(){
        return this._isBooked;
    }
    set isBooked(value){
        this._isBooked =value;
    }
}


//Individual Floors

class ParkingFloor{
    constructor(floorNumber,maxSpots){
        this.floorNumber = floorNumber;
        this._parkingSpots =[];

        for(let i=0;i<maxSpots;i++){
            if(i===0){
                this._parkingSpots.push(new Slot("car",i))
            }
            else if( i===1){
                this._parkingSpots.push(new Slot("bike",i))
            }
            else{
                this._parkingSpots.push(new Slot("truck",i))
            }
        }
    }

    get parkingSpots(){
        return this._parkingSpots;
    }
    set parkingSpots(value){
        this._parkingSpots=value
    }
    
}
//  var p1 = new ParkingFloor(0,3);
// console.log(p1)


// Parking lot or the Building

class ParkingLot {
    constructor(number){
        this.floors =[];
        this.numberOfFloors = number;

        for( let i=0;i<number;i++){
            this.floors.push(new Parking (i,3))
        }
    }
   
    get numberOfFloors(){
        return this._numberOfFloor;
    }

    get floors(){
        return this._floors;
    }

    parkVehicle(vehicle){
        let slot =this.findSlot(vehicle.type)
        
        if(slot){
            this.bookSlot(slot);
            let ticket =new Ticket(slot.floorNumber,slot.slot.number);
            console.log("Ticket",ticket)
        }
        else{
            console.log("No slot Booked")
            return false;
        }
    }



    findSlot(type){
        for(i=0;i<this._numberOfFloor;i++){
            for(let slot of this._floor[i]._parkingSpots){
                if(slot.type ===type && !slot.isBooked){
                    return{floorNumber:i, foundSlot:slot}
                }
                
            }
        }
        return false
    }
  
    bookSlot(slot){
        foundSlot.slot.isBooked =true;
        console.log("Slot is Booked");
        return true;
    }
}

// let pl1=new  ParkingLot(3)
// console.log(pl1)

// Ticket

class Ticket{
    constructor(floorNumber,slotNumber){
        this.floorNumber = floorNumber;
        this.slotNumber =slotNumber;
        this.issuedAt =new Date()
    }
}


let b1 =new Bike("Dl-1234","Red");

let pl1=new  ParkingLot(3)

pl1.parkVehicle(b1)


