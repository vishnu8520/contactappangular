import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allcontact',
  templateUrl: './allcontact.component.html',
  styleUrls: ['./allcontact.component.css']
})
export class AllcontactComponent implements OnInit{

  allcontacts:any=[]
  isloading:boolean=true
  errormsg:string=''
  searchkey:string=''

  constructor(private api:ApiService){

  }
  ngOnInit():void{
    this.allContactsfuntion()
  }

  allContactsfuntion(){
    this.api.getAllContacts().subscribe({
      next:(response:any)=>{
        console.log(response);
        setTimeout(() => {
          this.allcontacts=response
          this.isloading=false
        }, 2000);

      },
      error:(err:any)=>{
        console.log(err.message);
        this.errormsg=err.message
        this.isloading=false
        
      }    
    }

    )
  }

  // delete function
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
        this.allContactsfuntion()
      }
    })
  }


}
