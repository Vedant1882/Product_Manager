import { DisplayedHeaders } from "./displayedHeader"

export interface TableFilter{
   pageSize:number,
   pageIndex:number,
   columnName?:string,
   searchValue?:string
   displayedHeaders?:DisplayedHeaders
  }