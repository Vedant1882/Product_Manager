import { DisplayedHeaders } from "./displayedHeader"

export interface TableFilter{
   pageSize:number,
   pageIndex:number,
   sortingColumnName?:string,
   searchValue?:string
   displayedHeaders?:DisplayedHeaders,
   sortingDirection?:string,
  }