import { Component } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent {
  contact:ContactSchema={}
  groups:any=[]

  // get all groups - dependancy injenction 
  constructor (private api:ApiService, private addContactRouter:Router){
    this.contact.groupId="Select a Group"
  }
  ngOnInit():void{
    this.api.getGroups().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.groups=response
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
  }

  create(groupId:any){
    console.log(groupId.model);
    
  }

  addContact(contact:ContactSchema){
    // call api in service
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        console.log(response);
        // navigate to a allcontact page
        this.addContactRouter.navigateByUrl('')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}


