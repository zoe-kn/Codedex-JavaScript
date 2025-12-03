const departTripTicket = {
  name: "zoe",
  from: "stuttgart",
  to: "london",
  businessClass: true,
  upgrade() {
    if (this.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    }
  },
  leaveTime: 13,
  arriveTime: 14,
  flightTime(){
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flight += 24;
    }
    console.log(flightTime + " hours");
  }
};


const returnTripTicket = {
  name: "zoe",
  from: "london",
  to: "stuttgart",
  businessClass: true,
  upgrade() {
    if (this.businessClass) {
      console.log("Your ticket is already business class!");
    } else {
      this.businessClass = true;
      console.log("Ticket upgraded to business class!");
    }
  },
  leaveTime: 17,
  arriveTime: 19,
  flightTime(){
    let flightTime = this.arriveTime - this.leaveTime;
    if (flightTime < 0) {
      flight += 24;
    }
    console.log(flightTime + " hours");
  }
};


departTripTicket.upgrade();
returnTripTicket.upgrade();

departTripTicket.flightTime();
returnTripTicket.flightTime();
