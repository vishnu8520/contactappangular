import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})



export class EditcontactComponent implements OnInit {
  contact:ContactSchema={}
  groups:any=[]
  
   constructor(private editActivatedRoute:ActivatedRoute, private api:ApiService, private editRouter:Router){
    
   }
   ngOnInit(): void {
     this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id} = pathParameter
        console.log(id);
        this.api.viewcontact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
          }
        })
      }
     })
     this.api.getGroups().subscribe({
      next:(allGroups:any)=>{
        this.groups=allGroups
        console.log(this.groups);
        
      }
     })
   }
  //  edit contact
  editContact(id:any){
    this.api.editContact(id, this.contact).subscribe({
      next:(response:any)=>{
        // navigate the contact
        this.editRouter.navigateByUrl("")
      }
    })
  }
}
