import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL='https://contactapp-angular.onrender.com'
  constructor(private http:HttpClient) { }

  // handle error
  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    if(error.error){
      // client error
      errorMsg=`Error : ${error.message}`
    }
    else{
      errorMsg=`Status : ${error.status} \n Error : ${error.message}`
    }
    return throwError(()=>errorMsg)
  }
  //get all contacts api
  getAllContacts(){
    // api call from the url localhost:3000/contacts
   return this.http.get(`${this.BASE_URL}/contacts`)
  }

  //view contact
  viewcontact(id:any){
    // api call = url localhost3000/contacts/ca1  ca1 is the id here
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }
// get a particular group
  getGroup(id:any){
  return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  getGroups(){
    return this.http.get(`${this.BASE_URL}/groups`)
  }


  //add contact funtion
  addContact(contact:ContactSchema){
    // api call to add data in localhost3000/contacts
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  //  delete contact
  deleteContact(id:any){
   return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  // edit a particular contact
  editContact(id:any, contact:ContactSchema){
      return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }
}
