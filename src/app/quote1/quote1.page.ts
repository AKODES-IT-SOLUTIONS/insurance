import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceAppService } from '../services/insurance-app.service';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.page.html',
  styleUrls: ['./quote1.page.scss'],
})
export class Quote1Page implements OnInit {
  fName = '';
  lName = '';
  userEmail = '';
  mobNumber = '';
  compName = '';
  
  show = false;
  showVehicle = false;
  showMaker = false;
  showPolicyholder = false;
  showVehicleModel = false;
  showVehicleUsage = false;

  vehicleVal = '';
  vehicleMakeVal = '';
  policyhldrVal = '';
  vehicleModelVal = '';
  vehicleUsageVal = 'Personal';
  
  vehicleClass = [{ vehicle: 'Cars/Sedan/SUV' }]
  vehicleMake = [{ vMake : 'Acura'},{vMake : 'Acura'}]
  policyhldrList = [{ plcyhldrType: 'Private' }, { plcyhldrType:'Corporate' }]
  vehicleModel = [{ vModel : 'EL'},{ vModel : 'EL'}]
  vehicleUsage = [{ usage: 'Personal'},{ usage: 'Personal'}]
  constructor(public router:Router,
    public api:InsuranceAppService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.vehicleVal = '';
    this.vehicleMakeVal = '';
    this.policyhldrVal = '';
    this.vehicleModelVal = '';
    this.fName = '';
    this.lName = '';
    this.userEmail = '';
    this.mobNumber = '';
    this.compName = '';
  }
  openVehicleList() {
    if (this.showVehicle == true) {
      this.showVehicle = false
    } else {
      this.showVehicle = true;

    }
  }

  openVhclMakeList() {
    if (this.showMaker == true) {
      this.showMaker = false
    } else {
      this.showMaker = true;

    }
  }

  openPolicyhldrList(){
    if (this.showPolicyholder == true) {
      this.showPolicyholder = false
    } else {
      this.showPolicyholder = true;

    }
  }

  opnenVehicleModelList(){
    if (this.showVehicleModel == true) {
      this.showVehicleModel = false
    } else {
      this.showVehicleModel = true;

    }
  }

  opnenVehicleUsageList(){
    if (this.showVehicleUsage == true) {
      this.showVehicleUsage = false
    } else {
      this.showVehicleUsage = true;

    }
  }

  selectVehicleCls(list) {
    this.vehicleVal= list.vehicle;
    this.showVehicle = false;
  }

  selectVehicleMaker(list){
    this.vehicleMakeVal = list.vMake;
    this.showMaker = false;
  }

  selectPolicyholder(list){
    this.policyhldrVal = list.plcyhldrType;
    this.showPolicyholder = false;
  }
  
  selectVehicleModel(list){
    this.vehicleModelVal = list.vModel;
    this.showVehicleModel = false;
  }
  selectVehicleUsage(list){
    this.vehicleUsageVal = list.usage;
    this.showVehicleUsage = false;
  }

  goback(){
    this.router.navigate(['/home-page-screen-after-login']);
  }

  continue(){
    if(this.vehicleVal==''){
      this.api.presenttoast('Vehicle Type required')
    }
    else if(this.vehicleMakeVal==''){
      this.api.presenttoast('Vehicle Make required')
    }
    else if(this.vehicleModelVal==''){
      this.api.presenttoast('Vehicle Model required')
    }
    else if(this.policyhldrVal==''){
      this.api.presenttoast('Policyholder Type required');
      
    }
    else if(this.policyhldrVal == 'Private'){
     console.log('private');
     if(this.policyhldrVal=='Private'){
      if(this.fName == ''){

        this.api.presenttoast('First Name required')
      }
      else if(this.lName == ''){
        this.api.presenttoast('Last Name required')
      }
      else if(this.userEmail==''){
        console.log('not private');
        this.api.presenttoast('Email Address required')
      }
      else if(this.mobNumber==''){
        this.api.presenttoast('Phone Number required')
      } 
      else{
        this.callingapi()
      }
     }
     
      
      
      
    }
    else if(this.policyhldrVal=='Corporate'){
     
      if(this.compName == ''){

        this.api.presenttoast('company Name required')
      }else if(this.userEmail==''){
        console.log('not private');
        this.api.presenttoast('Email Address required')
      }
      else if(this.mobNumber==''){
        this.api.presenttoast('Phone Number required')
      } 
        else{
          this.callingapi()
      }
      
        
      
    }
    
    
   
  }

  callingapi(){
    let myData = "myData={\r\n    \"product_id\":\""+localStorage.getItem('prod_id')+"\",\r\n    \"vehicle_class\":\""+this.vehicleVal+"\",\r\n    \"first_name\": \""+this.fName+"\",\r\n    \"last_name\":\""+this.lName+"\",\r\n    \"vehicle_manufacturer\":\""+this.vehicleMakeVal+"\",\r\n    \"vehicle_model\":\""+this.vehicleModelVal+"\",\r\n    \"policyholder_type\":\""+this.policyhldrVal+"\",\r\n    \"mobile\":\""+this.mobNumber+"\",\r\n    \"company_name\":\""+this.compName+"\",\r\n    \"email\":\""+this.userEmail+"\",\r\n    \"verify_token\":\""+localStorage.getItem('token')+"\",\r\n    \"method\": \"save_product_quote\" \r\n}"
    this.api.insertData(myData).subscribe((data:any)=>{
      console.log(data);
      if(data.message=='success'){
        this.api.presenttoast(data.info.message)
      }
    })
  }
}
