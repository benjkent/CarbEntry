import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {DeclarationData} from "../interfaces/declaration-data";
import {Declaration} from "../interfaces/declaration-data"
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }
  getDeclarationStatements(){
    const url: string='/assets/json/declarations.json';

    return this.httpClient.get<{type: string, statement: string}[]>(url);
  }
}

