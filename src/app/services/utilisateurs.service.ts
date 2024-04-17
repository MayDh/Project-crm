import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})

export class UtilisateursService {

  public users: Utilisateur[] = [
    { id: 1, nom: "John Doe", email: "john@example.com", password: "password123", role: "admin" },
    { id: 2, nom: "Jane Smith", email: "jane@example.com", password: "pass123", role: "user" },
    { id: 3, nom: "Alice Johnson", email: "alice@example.com", password: "qwerty", role: "user" },
    { id: 4, nom: "Bob Brown", email: "bob@example.com", password: "bobpass", role: "manager" },
    { id: 5, nom: "Emily Davis", email: "emily@example.com", password: "emily123", role: "admin" },
    // Add more fake data objects here
    { id: 6, nom: "Michael Wilson", email: "michael@example.com", password: "mypass", role: "user" },
    { id: 7, nom: "Emma Martinez", email: "emma@example.com", password: "emma456", role: "user" },
    { id: 8, nom: "Sophia Anderson", email: "sophia@example.com", password: "sophia", role: "manager" },
    { id: 9, nom: "William Taylor", email: "william@example.com", password: "willpass", role: "admin" },
    { id: 10, nom: "Olivia Thomas", email: "olivia@example.com", password: "olivia123", role: "user" },
    // Add more fake data objects here
    { id: 11, nom: "James Jackson", email: "james@example.com", password: "james456", role: "user" },
    { id: 12, nom: "Isabella White", email: "isabella@example.com", password: "isabella", role: "manager" },
    // Add more fake data objects here
    { id: 13, nom: "Alexander Harris", email: "alexander@example.com", password: "alex123", role: "user" },
    { id: 14, nom: "Ella Martin", email: "ella@example.com", password: "ellapass", role: "admin" },
    // Add more fake data objects here
    { id: 15, nom: "Liam Garcia", email: "liam@example.com", password: "liam456", role: "user" },
    { id: 16, nom: "Ava Lopez", email: "ava@example.com", password: "avalove", role: "user" },
    { id: 17, nom: "Noah Martinez", email: "noah@example.com", password: "noahpass", role: "admin" },
    { id: 18, nom: "Mia Hernandez", email: "mia@example.com", password: "miamia", role: "manager" },
    { id: 19, nom: "Ethan Smith", email: "ethan@example.com", password: "ethanpass", role: "user" },
    { id: 20, nom: "Amelia Johnson", email: "amelia@example.com", password: "amelia123", role: "user" },
    // Add more fake data objects here
    { id: 21, nom: "Mason Davis", email: "mason@example.com", password: "masonpass", role: "admin" },
    // Add more fake data objects here
    { id: 22, nom: "Harper Thomas", email: "harper@example.com", password: "harper456", role: "user" },
    // Add more fake data objects here
    { id: 23, nom: "Liam Hernandez", email: "liam@example.com", password: "liampass", role: "admin" },
    // Add more fake data objects here
    { id: 24, nom: "Evelyn Wilson", email: "evelyn@example.com", password: "evelynpass", role: "manager" },
    { id: 25, nom: "Logan Taylor", email: "logan@example.com", password: "logan123", role: "user" },
    // Add more fake data objects here
    { id: 26, nom: "Avery Harris", email: "avery@example.com", password: "avery456", role: "user" },
    // Add more fake data objects here
    { id: 27, nom: "Sofia Anderson", email: "sofia@example.com", password: "sofiapass", role: "admin" },
    { id: 28, nom: "Jackson Jones", email: "jackson@example.com", password: "jacksonpass", role: "user" },
    { id: 29, nom: "Madison Brown", email: "madison@example.com", password: "madison123", role: "manager" },
    // Add more fake data objects here
    { id: 30, nom: "Aiden Garcia", email: "aiden@example.com", password: "aiden456", role: "admin" },
    { id: 31, nom: "Chloe Lopez", email: "chloe@example.com", password: "chloepass", role: "user" },
    // Add more fake data objects here
    { id: 32, nom: "Mateo Martinez", email: "mateo@example.com", password: "mateo123", role: "user" },
    // Add more fake data objects here
    { id: 33, nom: "Luna Hernandez", email: "luna@example.com", password: "lunapass", role: "admin" },
    { id: 34, nom: "Carter Smith", email: "carter@example.com", password: "carter456", role: "manager" },
    { id: 35, nom: "Elena Johnson", email: "elena@example.com", password: "elenapass", role: "user" },
    // Add more fake data objects here
    { id: 36, nom: "Sebastian Davis", email: "sebastian@example.com", password: "sebastian123", role: "admin" },
    // Add more fake data objects here
    { id: 37, nom: "Aria Wilson", email: "aria@example.com", password: "ariapass", role: "user" },
    { id: 38, nom: "Grayson Taylor", email: "grayson@example.com", password: "graysonpass", role: "user" },
    // Add more fake data objects here
  ]
  constructor() { }

  public getUtilisateurs() : Observable<Utilisateur[]> {
    //return this.httpClient.get('API')
    return  of(this.users)
  }

  public postUtilisateur() {

  }

  public deleteUtilisateur() {

  }


}



